var express= require('express');

app=express();

app.get("/home",function (req,res) {
    res.send("Hello Homepage ");
});

app.post("/about",function (req,res) {
    res.send("This is about page ");
});


app.get("/abs",function (req,res) {
    res.status("503 ").end("");
});


app.listen(8080,function () {
    console.log("Server Run Success")
})

