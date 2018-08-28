var mysql = require("mysql");
require("dotenv").config();
var fs = require("fs");
var express = require('express');
var app = express();
var router = express.Router();
var methodOverride = require('method-override');
var bcrypt = require('bcryptjs');
app.use(methodOverride('_method'));
//you need this to be able to process information sent to a POST route
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));
app.use(cookieParser());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var path = require("path");

// Serve static content for the app from the "public" directory in the application directory.
// you need this line here so you don't have to create a route for every single file in the public folder (css, js, image, etc)
//index.html in the public folder will over ride the root route
app.use(express.static("public"));

app.set('view engine', 'ejs');

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: process.env.DB_USER,
  
    // Your password
    password: process.env.DB_PASSWORD,  //placeholder for your own mySQL password that you store in your own .env file
    database: process.env.DB_NAME    //TBD
  });


//routes  
app.get('/', function(req, res) {
	res.render('pages/index');
});

app.get('/login', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.get('/home', function(req, res) {
	res.sendFile(path.join(__dirname, 'public/home.html'));
});
app.post('/log', function(req, res){
	
  var username = req.body.username;
  var password = req.body.password;
  console.log(username + " " + password);
  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password],function (error, results, fields) {
    if (error) throw error;
    console.log(results[0]);
    console.log("logged in");
    res.redirect('/home');
})});



//register page
app.get('/signup', function(req, res){
  res.sendFile(path.join(__dirname, 'public/registration.html'));
	bcrypt.genSalt(10, function(err, salt) {
	    // res.send(salt);
	    bcrypt.hash(req.params.password, salt, function(err, p_hash) { 

	    	// res.send(p_hash);

	    	connection.query('INSERT INTO users (email, password_hash) VALUES (?, ?)', [req.params.email, p_hash],function (error, results, fields) {
	    	  
	    	  var what_user_sees = "";
	    	  if (error){
	    	  	what_user_sees = 'you need to use a unique email';
	    	  }else{
	    	  	what_user_sees = 'you have signed up - please go login at the login route';
	    	  }

	    	  res.send(what_user_sees);
	    	  
	    	});
	    });
	});
});

module.exports = router;








app.listen(3000);