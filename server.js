var express = require("express");
var app = express();
var PORT = 3000;

var middleware = require("./middleware.js");

// this is application leve middleware
// applies to all calls, all routes
//app.use(middleware.requireAuthentication);

app.get("/hello", function(req, res){
	res.send("Hello");
});

// now add route-level middleware
// add as second argument
app.get("/about", middleware.requireAuthentication, function(req, res){
	res.send("About Us");
});

app.get("/logger", middleware.logger, function(req, res){
	res.send("Logger Route to test Logger middleware");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function(){
	console.log("server started on port " + PORT);
});