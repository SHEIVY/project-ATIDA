const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const vaccinationDate=new Schema({
    vaccinationDate: {type:Date,required:true},
})



const customer = mongoose.model('dateOfVaccination',vaccinationDate)


module.exports=dateOfVaccination