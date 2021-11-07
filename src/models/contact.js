const mongoose = require("mongoose");
const validator = require("validator");
const hrSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:[2, "Minimum Two Letters Required"],
        maxlength:30
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Is Invalid");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    msg:{
        type:String,
        required:true
    }
});

const Contact = new mongoose.model("Contact", hrSchema);
module.exports = Contact;