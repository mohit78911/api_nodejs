const mongoose=require('mongoose');
let userSchema= new mongoose.Schema({
    _id:NU,
    name:String,
    email:String,
    address:String,
})
module.exports=mongoose.model('nodeuser',userSchema);