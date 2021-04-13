const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema =new mongoose.Schema({
    FirstName:{
        type:String,
        required: [true, "please provide FirstName"],
        min:3
    },
    LastName:{
        type:String,
        required: [true, "please provide LastName"],
        min:3
    },

    phoneNumber:{
        type:Number,
        required:[true, "please provide Phonr Numbr"],
        min:10,
    },
    email:{
        type:String,
        required:[true, "please provide Email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`],
    },
    password:{
        type: String,
        required:[true, "please provide Password"],
        minlength: 6,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

})




const User = mongoose.model("User", UserSchema);
module.exports = User;