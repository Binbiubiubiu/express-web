var path = require('path');
var express = require("express");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var router = require('./controller/index');
var app = express();
var morgan = require('morgan');
app.use(morgan('combined'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname, '/views'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('lbdo'));
app.use(session({
    secret: 'lbdo',
    name: 'web_node',   
    cookie: {maxAge: 60000 },  
    resave: false,
    saveUninitialized: true,
}));


app.use('/system', express.static(path.join(__dirname, '/public')));
app.get('/system/index', router.showIndex);
app.get('/help/health',router.showHealth);

app.post('/set', function (req, res) { 
    res.json({token:'system'})
})

app.listen(9080)