const express= require('express');
app=express();
app.use(express.json())

app.get('/',(req,res,next)=>{

    // Request
    let userName=req.headers['userName'];
    if(userName==="Mali"){
        console.log("I am about middleware")
        next()
    }
    else {
        res.end("Invalid")
    }

})


app.listen(5102,function () {
    console.log("Server Run Success")
})