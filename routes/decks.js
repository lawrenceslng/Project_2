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
    database: process.env.DB_NAME,    //TBD
    multipleStatements: true
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
        
        // collection = results;
        
        });
    });
});

router.get('/viewer',function(req,res){
    res.redirect('/decks/dash')
})

router.post('/create', function(req, res){

    connection.query('INSERT INTO decks (users_id, name) VALUES (?,?);', [req.session.user_id, req.body.name],function(error, results, fields){
        if (error) throw error;

        res.redirect('/');
        
    })
});

router.get('/edit/:id', function(req,res){
    //Need to write code to check id of deck and if all params are met directs to route
    var deckIden = req.params.id;
    console.log(deckIden);
    if(deckIden ==3){
        connection.query('SELECT * FROM deck_cards LEFT JOIN cards ON cards_id = id', function(error, results, fields){
            // console.log(results)
            var front = '';
            var cardsIden = '';
            for(var i =0; i<results.length;i++){
                    
                front += results[i].front +'<br>'; 
                // cardsIden += results[i].cards_id + '<br>'
            }
            if(front !=""){
            var split = front.split('<br>');
            // var cardSplit = cardsIden.split('<br>');
            // console.log(cardSplit);
            }   
            
            res.render('pages/edit_decks',{
                data: split
                // JSON.stringify(results) 
            });
            })  
    }
    else{ 
        res.send('Error. ')
    }

});

router.get('/edit', function(req,res){
    res.render('pages/edit_decks');

})

module.exports = router;