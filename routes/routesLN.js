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
    console.log(req.session);
    if(req.session.username) {
        res.render('pages/profile', {data: req.session});
        
    }
    else res.sendFile(path.join(__dirname, '../public/unauthorized.html'));
});

router.post('/', function(req, res){
    console.log(req.body.password + "       " + req.session.user_id);
    console.log("updating PW");
    bcrypt.genSalt(10, function(err, salt) {
        // res.send(salt);
        bcrypt.hash(req.body.password, salt, function(err, p_hash) { 
            connection.query('UPDATE users SET password = ? WHERE id = ? ;', [p_hash, req.session.user_id],function(error, results, fields){
                if (error) throw error;
        
               res.redirect("/home");
            })
        })
    })
   
    //need to 
    //1) Connect to database
    //2) do a put (update) to the password field of this user
    //3) destroy current session /skip
    //4) create new session for user /skip
    //5) redirect to login again /skip
    // res.redirect("/home");
});

router.post('/update', function(req, res){
    console.log(req.body.email);
    console.log(req.session.email);
    connection.query('UPDATE users SET email = ? WHERE id = ? ;', [req.body.email, req.session.user_id],function(error, results, fields){
        if (error) throw error;
        console.log(req.session.email);
        connection.query('SELECT * FROM users WHERE id = ?',[req.session.user_id],function(error, results, fields){
            if(error) throw error;
            console.log(results);
            req.session.user_id = results[0].id;
              req.session.email = results[0].email;
              req.session.username = results[0].username;
              req.session.firstName = results[0].first_name;
              req.session.lastName = results[0].last_name;
              res.render("pages/profile",{data: req.session});
        })
        //destroy current session and start a new session
        // req.session.destroy(function(err){
        //     if(err) throw err;
        //       req.session.user_id = results[0].id;
        //       req.session.email = results[0].email;
        //       req.session.username = results[0].username;
        //       req.session.firstName = results[0].first_name;
        //       req.session.lastName = results[0].last_name;
        //       res.render("pages/profile",{data: req.session});
        //   })
       
    })
});
module.exports = router;