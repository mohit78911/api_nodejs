const express=require('express');
const app=express();
const mongoose=require('mongoose');
let User=require('./models/nodeusers')
mongoose.connect('mongodb+srv://root:root@cluster0.au0wghs.mongodb.net/demo?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})
// jyare badhi field no data joto hoy tyare 

app.get('/users',function(req,res){
    User.find().then((data)=>{
        res.json(data)
    })
})
// khali id and name field nodata joto hoy tyare 
app.get('/users',function(req,res){
    User.find().select('data').then((data)=>{
        res.json(data)
    })
})
app.listen(4000)