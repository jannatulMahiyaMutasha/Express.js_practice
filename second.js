const express=require('express');
app=express();

app.get('/',(req,res,next)=>{
//let x= req.headers['password'];
//let x= req.headers
res.json({name:x});
})


app.listen(5759,function () {
    console.log("Server Run Success")
})