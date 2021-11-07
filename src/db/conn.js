const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/hiring", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("Success"))
.catch((err) => console.log(err));