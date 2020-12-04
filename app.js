var express = require("express");
var app = express();

app.set("view engine", "ejs"); // to set views folder as templating engine

app.get("/", function(req,res){
    res.send("Hi!");
});

app.get("/ejs", function(req,res){
    res.render("home.ejs");
});

app.get("/name", function(req,res){
    res.send("Hi! from name");
});

app.get("/:subject", function(req,res){
    var x = req.params.subject;
    res.render("subject" ,{s:x}); // no need to write subject.ejs because of app.set("view engine", "ejs");
});

app.get("/:name", function(req,res){
    var x = req.params.name;
    res.send("Hi! from name : " ,x);
});

app.listen("8000", function(){
    console.log("Server has Started!");
});