/*
var express= require('express');

var bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.json());
app.post('/',function (req,res){
    let JSONData= req.body;
    let JSONString= JSON.stringify(JSONData);
    res.send(JSONString);
    let name= JSONData['name'];
    let city = JSONData['city'];
    res.send(name+" "+city);
});
               
app.listen(9314,function () {
    console.log("Server Run Success")
})



// Working With Multipart Form Data
var express= require('express');
var multer = require('multer');
var multer=multer();

var app=express();
app.use(multer.array())
app.use(express.static('public'))

app.post('/',function (req,res){
    let JSONData= req.body;
    res.send(JSON.stringify(JSONData));
});

app.listen(9594,function () {
    console.log("Server Run Success")
})



//File Upload
var express= require('express');
var multer= require('multer')
var app=express();


var storage=multer.diskStorage({
    destination:function (req,file,callBack) {
        callBack(null,'./uploads1');
    },
    filename:function (req,file,callBack) {
        callBack(null,file.originalname)
    }
});

var upload=multer({storage:storage}).single('myfile')
app.post('/',function (req,res) {
    upload(req,res,function (error) {
            if(error){
                res.send("File Upload Fail")
            }
            else{
                res.send("File Upload Success")
            }
    });
});


app.listen(8066,function () {
    console.log("Server Run Success")
})



//Route Middleware
var express=require('express')
var app=express();


app.get('/',function (req,res) {
    res.send("This is home page")
})

app.use('/contact',function (req,res,next) {
    console.log("I am about middleware1")
    next()
})
app.get('/contact',function (req,res) {
    res.send("This is contact page")
})


app.use('/about',function (req,res,next) {
    console.log("I am about middleware")
    next()
})


app.get('/about',function (req,res) {
    res.send("This is about page")
})


app.listen(5001)



//Application Middleware
var express=require('express')
var app=express();

app.use(function (req,res,next) {
    console.log("I am about middleware")
    next()
})

app.get('/',function (req,res) {
    res.send("This is home page")
})


app.get('/contact',function (req,res) {
    res.send("This is contact page")
})


app.get('/about',function (req,res) {
    res.send("This is about page")
})



app.listen(5009)



var express= require('express');
var multer= require('multer')
var app=express();


var storage=multer.diskStorage({
    destination:function (req,file,callBack) {
        callBack(null,'./uploads1');
    },
    filename:function (req,file,callBack) {
        callBack(null,file.originalname)
    }
});

var upload=multer({storage:storage}).single('myfile')
app.post('/',function (req,res) {
    upload(req,res,function (error) {
            if(error){
                res.send("File Upload Fail")
            }
            else{
                res.send("File Upload Success")
            }
    });
});

var express= require('express');

var app= express();

app.get('/',function (req,res){

    res.append("village","Valluka");
    res.append("color","Green");

    res.end("Hello");
});
*/

var express= require('express');

var app= express();

app.get('/',function (req,res){
   // res.cookie("cookie1","01");
   // res.cookie("cookie2","02");
   // res.cookie("cookie3","03");

    //res.header("Name","Atia");

    res.clearCookie("cookie1");
    res.clearCookie("cookie2");
    res.clearCookie("cookie3");

    res.end("Say Hello");
});
app.listen(8115,function () {
    console.log("Server Run Success")
})

