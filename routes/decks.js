var mysql = require("mysql");
require("dotenv").config();
var fs = require("fs");
var express = require('express');
var app = express();
var router = express.Router();

//you need this to be able to process information sent to a POST route
var bodyParser = require('body-parser');

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

var collection = []; 

router.get('/', function(req,res){
    res.render('pages/decks')
    , {
        data: req
    }

});

router.get('/dash', function(req, res){
    
	connection.connect(function(err) {
	  if (err) {
	    console.error("error connecting: " + err.stack);
	  }

	    connection.query('SELECT * FROM decks WHERE users_id = ?;', [req.session.user_id], function (error, results, fields) {
        if (error) throw error;
        
        // req.session.decks = res.json(results); 
        res.json(results);

        collection = results;

        console.log(collection);
        
        });
    });
});

router.get('/viewer',function(req,res){
    res.redirect('/decks/dash')
})

router.post('/create', function(req, res){
    console.log(req.body.name);
    connection.query('INSERT INTO decks (users_id, name) VALUES (?,?);', [req.session.user_id, req.body.name],function(error, results, fields){
        if (error) throw error;

        res.send('Created ' + req.body.name + ' successfully!')
    })
});


module.exports = router;