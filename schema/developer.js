const mongoose=require('mongoose');

const developerSchema=new mongoose.Schema({
    name:String,
    role:String,
    company:String,
    age:Number
});

module.exports=mongoose.model('developers',developerSchema);


