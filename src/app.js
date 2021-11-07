const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
require("./db/conn");
const Contact = require("./models/contact");
const hbs = require("hbs");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'hbs');
app.use(express.static(static_path));
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/lightbulb", (req,res) => {
    res.render("lightbulb");
});

// app.get("/animatedcar", (req,res) => {
//     res.render("animatedcar");
// });

app.get("/windows", (req,res) => {
    res.render("windows");
});

app.get("/nodejsexpressjs", (req,res) => {
    res.render("nodejsexpressjs");
});

app.get("/contact", (req,res) => {
    res.render("contact");
});

app.post("/contact", async(req,res) => {
    try {
        const contactedHr = new Contact({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            msg:req.body.msg
        });

        const contacted = await contactedHr.save();
        res.status(201).render("response");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("*", (req,res) =>{
    res.render("404error");
});

app.listen(port,()=>{
    console.log(`We Are At ${port}`);
});