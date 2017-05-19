var express = require("express")
	bodyParser = require("body-parser")
	mongoose = require("mongoose")
	
	hbs = require("hbs")
	app = express("")
	user = require("./user");
	 // (./ searches in local folder)


	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.set("view engine", "hbs");

	app.get("/", function(req, res){
		res.render("home") 	
	});
	app.get("/login", function(req, res){
		res.render("login") 
	});
	app.get("/signup", function(req, res){
		res.render("signup") 
	});	
	app.get("/layout", function(req, res){
		res.render("layout") 
	});	

	app.post("/login", function(req, res){
		user.findOne({"username": req.body.username}, function(err, user){
			if(err){
				console.log(err);
			} else {
				someUser = user;
				res.redirect("/data");
			}
		});
	});

	app.post("/signup", function(req, res){
		new User({
			username: req.body.username,
			password: req.body.password
		}).save(function(err){
			if(err) {
				console.log(err);
			} else {
				res.redirect("/login")
			}
		});
	});
	app.get
		app.get("/data", function(req, res){
		res.render("data",{
			user: someUser
		});

	});	

	mongoose.connect("mongodb://localhost/user");

	app.listen(8080, function(){
	console.log("server is running");	
});

	