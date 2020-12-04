var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/mongo_demo", {useNewUrlParser : true, useUnifiedTopology: true});

app.set("view engine", "ejs"); // to set views folder as templating engine
app.use(bodyParser.urlencoded({ extended: true }));

var blogSchema = new mongoose.Schema({
	title   : String,
	image   : String,
	body    : String,
	created : {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

/* frontend
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
*/

//Starting Backend

//root route
app.get("/", function(req,res){
    res.render("home");
});

app.listen("8000", function(){
    console.log("Server has Started!");
});