const mongoose = require("mongoose")

const UserScheme =new mongoose.Schema(
    {
        id:{
            type:String,
            unique:true
        },
        name:{
            type:String
        },
        picture:{
            type:String
        },
        phone_number:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        hire_date:{
            type:Date
        },
        manager_id:{
            type:String,
            unique:true
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("user", UserScheme)