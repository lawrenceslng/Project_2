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


//routes  
// router.get('/hi', function(req, res) {
// 	res.send("hi");
// });

router.get('/:category/:id', function(req, res){
    // res.render('pages/flashcards');
	connection.connect(function(err) {
	  if (err) {
	    console.error("error connecting: " + err.stack);
	  }

	    connection.query('SELECT * FROM cards WHERE category = ? AND id = ?', [req.params.category, req.params.id], function (error, results, fields) {
        if (error) throw error;
        
        // res.json(results);
	    
	    res.render('pages/flashcards', {
            data: results
        });

        console.log(results);
        });
	});
});

router.get('/new_card', function(req, res){
    res.render('pages/create_cards');

})

router.post('/create', function(req, res){
    console.log(req.body);
    connection.query('INSERT INTO cards (creator_id, category, front, back, difficulty) VALUES (?,?, ?, ?, ?);', [req.session.user_id, req.body.category, req.body.front, req.body.back, req.body.difficulty],function(error, results, fields){
        if (error) throw error;

        res.redirect('/flashcards/all_cards');
    })
});

router.get('/all_cards', function(req, res){
    // res.render('pages/flashcards');
    // connection.query('SELECT * FROM cards', function (error, results, fields) {
    //     if (error) throw error;
        
        // res.json(results);
        
        // res.render('pages/all_cards', {
        //     data: results
        // });

        res.render('pages/all_cards');
    // });
});

router.get('/community_cards/', function(req, res){
	connection.query('SELECT * FROM cards',function (error, results, fields) {
	  if (error) throw error;
      res.json(results);
    //   console.log(results);
	});
});


module.exports = router;