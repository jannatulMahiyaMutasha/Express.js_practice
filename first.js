var express= require('express');

var app= express();
/*
app.get('/',function (req,res){
let x= req.query.name;
let y= req.query.city;
    res.end(y+" " +x);
});
*/
app.get('/:name/:city',function (req,res){
    let x= req.params.name;
    let y= req.params.city;
       // res.end(x+" "+y);
       res.json({name:x,city:y});
    });
    //http://localhost:8224/Mili/Rajshahi
app.listen(8225,function () {
    console.log("Server Run Success")
})