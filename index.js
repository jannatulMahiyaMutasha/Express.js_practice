var express= require('express');

app=express();

app.get("/",function (req,res) {
    res.end("This is simple string response ");
});

app.listen(8023,function () {
    console.log("Server Run Success")
})