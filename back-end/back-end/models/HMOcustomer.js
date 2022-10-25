// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const vaccination=require("./vaccinations")
const CustSchema=new Schema({
    firstName: {type:String,required:true},
    lastName: {type:String, required:true},
    email:{type:String,required:true},
    city: {type:String,required:true},
    street: {type:String, required:true},
    streetNumber:{type:Number, required:true},
    // address:[new Schema({
    //     city: {type:String,required:true},
    //     street: {type:String, required:true},
    //     streetNumber:{type:Number, required:true}
    // },{ _id:false })],
    dateOFbirth:{type:Date,required:true},
    custID:{type:String,required:true},
    pelephon:{type:String,required:true},
    telephon:{type:String,required:true},
    theVaccination:{type:vaccination,required:true}
})



const customer = mongoose.model('customer',CustSchema)


module.exports=customer