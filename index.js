var express = require('express');

app = express();

app.get("/home",function (req,res) {
    res.end("Hello Homepage ");
});

app.get("/abs",function (req,res) {
    res.status("503 ").end("");
});

app.post("/about",function (req,res) {
    res.end("This is about page ");
});

app.put("/blog",function (req,res) {
    res.end("This is blog page ");
});

app.delete("/contact",function (req,res) {
    res.end("This is contact page ");
});

//json response
app.get("/four",function (req,res) {

    let MyJsonArrays=[
          {
            name:"Mahi",
            city:"Dhaka",
             Occupation:"Student"
    },
    {
       name:"Mahuya",
            city:"Gazipur",
             Occupation:"Doctor"
    },
    {
    name:"Mahir",
            city:"Tangail",
             Occupation:"Teacher"
    }
    ]
        res.json(MyJsonArrays);
    });
    
    //response download
    app.get("/five",function (req,res) {
        res.download("./uploads/abc.jpg");
    });

    //response redirect
    app.get("/Bangladesh",function (req,res) {
        res.redirect("http://localhost:8084/China");
    });

    app.get("/China",function (req,res) {
        res.send("Hello China");
    });

    //Response Header
    app.get("/six",function (req,res) {
        res.append("name","Mahi");
        res.append("age","25");
        res.append("city","Dhaka");
        res.status(201).end("Hello World");
        
    });

//Response Set Cookies
    app.get("/seven",function (req,res) {
        res.cookie("name","Mahiya");
        res.cookie("age","26");
        res.cookie("city","Gazipur");
        res.end("cookie set successfully");
    });

    // Response Clear Cookies
    app.get("/eight",function (req,res) {
        res.clearCookie("name");
        res.clearCookie("age");
        res.clearCookie("city");
       // res.end("cookie set successfully");
    });

    //Simple Get Request
    //app.get("/",function (req,res) {
       // res.end("Hello simple get request successfull ");
    //});

    // Get Request With URL Query
    /*app.get("/",function (req,res) {
        let firstName = req.query.firstName;
        let lastName =  req.query.lastName;
        res.end(firstName + "  " + lastName);
        });

/*
        // Working With Get Request Header
        app.get("/",function (req,res) {
            let firstName = req.header('firstName');
            let lastName =  req.header('lastName');
            let Host = req.header('Host');
            res.end(Host);
           // res.end(firstName + "  "+lastName);
            });
            */
        
          /*  //Simple Post Request
            app.post("/",function (req,res) {  
              // res.send("This is simple post"); 
            });  
            */
           /* // Post Request With URL Query
            app.post("/",function (req,res) {
                let firstName = req.query.firstName;
                let lastName =  req.query.lastName;
                res.send(firstName + "  " +lastName);
                });
*/
                // Post Request With Header Properties
                app.post("/",function (req,res) {
                    let userName = req.header('userName');
                    let password =  req.header('password');
            
                    res.send("User Name:" +userName +" Password: " +password);
                });

                // Post application-json
                
app.listen(5914,function () {
    console.log("Server Run Success")
})