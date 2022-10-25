const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const vaccinationArray=require('./vaccinationDate')

const VaccinationSchema=new Schema({
    vaccinationDate: {type:[vaccinationDate],required:true},
    manufacturer : {type:String, required:true},
    positiveResult:{type:String,required:true},
    negativeResult: {type:String,required:true},
})



const vaccination = mongoose.model('vaccination',VaccinationSchema)


module.exports=vaccination