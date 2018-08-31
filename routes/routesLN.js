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

router.get('/', function(req, res){
    console.log(req.session);
    if(req.session.username) {
        res.render('pages/profile', {data: req.session});
        
    }
    else res.sendFile(path.join(__dirname, '../public/unauthorized.html'));
});

module.exports = router;