const express=require('express');
app=express();
app.use(express.json())

app.get('/',(req,res,next)=>{

    let z=req.body;
    res.json(z);
})


app.listen(5057,function () {
    console.log("Server Run Success")
})