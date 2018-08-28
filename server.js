//List of NPM and inherent packages
var mysql = require("mysql");
require("dotenv").config();
var fs = require("fs");
var express = require('express');
var app = express();
var router = express.Router();
var methodOverride = require('method-override');
var bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require("path");

app.use(methodOverride('_method'));
app.use(session({ secret: 'app', cookie: { maxAge: 1*1000*60*60*24*365 }}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
// you need this line here so you don't have to create a route for every single file in the public folder (css, js, image, etc)
//index.html in the public folder will over ride the root route
app.use(express.static("public"));

//sets EJS available
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
  console.log("getting root");
});
app.get('/home/:username', function(req, res) {
  if(req.session.username)   res.render('pages/landing-page', {data: req.params.username});
  else  res.send("Error, not logged in");
  // console.log(req.session.username);
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
  connection.query('SELECT * FROM users WHERE username = ?', [username],function (error, results, fields) {
    if (error) throw error;
  
    //  res.json(results);
      
      if (results.length == 0){
        res.send('try again');
      }else {
        bcrypt.compare(password, results[0].password, function(err, result) {
            
            if (result == true){
  
              req.session.user_id = results[0].id;
              req.session.email = results[0].email;
              req.session.username = results[0].username;
              req.session.firstName = results[0].first_name;
              req.session.lastName = results[0].last_name;

              res.redirect('/home/'+ req.session.username);
              // res.send('you are logged in:');
              // console.log('/home/'+ req.session.username);
            }else{
              res.redirect('/login');
            }
        });
      }
    });
  });
    // console.log(results[0]);
    // console.log("logged in");
    // res.redirect('/home');

    app.get('/user-info', function(req, res){
      var user_info = {
        user_id : req.session.user_id,
        email: req.session.email
      }
    
      res.json(user_info);
    });
    
    app.get('/logout', function(req, res){
      req.session.destroy(function(err){
        res.send('you are logged out');
      })
    });


//register get and post 
app.get('/signup', function(req, res){
  res.sendFile(path.join(__dirname, 'public/registration.html'));
});

app.post('/register', function(req, res){
	
  var username = req.body.username;
  var password = req.body.password;
  var firstName = req.body.first_name;
  var lastName = req.body.last_name;
  var email = req.body.email;
  console.log(username + " " + password + " " + firstName + " " + lastName + " " + email);
  bcrypt.genSalt(10, function(err, salt) {
	    // res.send(salt);
	    bcrypt.hash(password, salt, function(err, p_hash) { 
        connection.query('INSERT INTO users (username, password, first_name, last_name, email) VALUES (?,?,?,?,?)', [username, p_hash, firstName, lastName, email],function (error, results, fields) {
    if (error) throw error;
    console.log(results[0]);
    console.log("logged in");
    res.redirect('/home');
})})})
});

// module.exports = router;


//Uncomment below to enable routing
// var questionRoutes = require('./routes/questions.js');
// // var commentRoutes = require('./routes/comments.js');
// var classmateRoutes = require('./routes/classmates.js');


// app.use('/questions', questionRoutes);


app.listen(3000);