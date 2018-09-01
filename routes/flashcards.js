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

router.get('/', function(req, res){
	    
    res.render('pages/flashcards');

});

router.put('/edit', function(req, res){
    console.log(req.body);

    if(req.body.front){
        connection.query('UPDATE cards SET front = ? WHERE id = ?', [req.body.front, req.body.id],function(error, results, fields){
            if (error) throw error;
    
            res.json(results);
        });


        //console.log(results);

    }else if(req.body.back){
        connection.query('UPDATE cards SET back = ? WHERE id = ?', [req.body.back, req.body.id],function(error, results, fields){
            if (error) throw error;
    
            res.json(results);

        });
    }else if(req.body.category){
        connection.query('UPDATE cards SET category = ? WHERE id = ?', [req.body.category, req.body.id],function(error, results, fields){
            if (error) throw error;
    
            res.json(results);
        });
    }else{
        connection.query('UPDATE cards SET difficulty = ? WHERE id = ?', [req.body.difficulty, req.body.id],function(error, results, fields){
            if (error) throw error;
    
            res.json(results);
        }); 
    }

});


router.get('/view_cards', function(req, res){

    connection.query('SELECT * FROM cards WHERE creator_id = ? ORDER BY id DESC;', [req.session.user_id], function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });

});


router.get('/new_card', function(req, res){
    res.render('pages/create_cards');

})

router.post('/create', function(req, res){
    // console.log(req.body);
    connection.query('INSERT INTO cards (creator_id, category, front, back, difficulty) VALUES (?,?, ?, ?, ?);', [req.session.user_id, req.body.category, req.body.front, req.body.back, req.body.difficulty],function(error, results, fields){
        if (error) throw error;
        console.log(results);
        console.log(results.insertId);
       
        connection.query('INSERT INTO deck_cards (decks_id, cards_id) VALUES (?, ?);', [req.body.deck_id, results.insertId],function(error, deckRes, fields){
            if (error) throw error;
            console.log(deckRes);
            res.redirect('/flashcards/');
        })       
    })
});

router.get('/all_cards', function(req, res){
    
        res.render('pages/all_cards');
});

router.get('/community_cards', function(req, res){
	connection.query('SELECT * FROM cards',function (error, results, fields) {
	  if (error) throw error;
      res.json(results);
	});
});

// router.get('/fill', function(req,res){
//     connection.query('SELECT category FROM cards GROUP BY category ORDER BY category;', function(error, results, fields){
//         if (error) throw error;
//         res.json(results);
//     })
// });

// router.get('/fill_user', function(req,res){
//     connection.query('SELECT category FROM cards WHERE creator_id = ? GROUP BY category ORDER BY category;',[req.session.user_id], function(error, results, fields){
//         if (error) throw error;
//         res.json(results);
//     })
// });

// router.get('/categories', function(req, res){
// 	connection.query('SELECT * FROM cards WHERE category = ?',[req.body.category],function (error, results, fields) {
// 	  if (error) throw error;
//       res.json(results);
// 	});
// });






module.exports = router;