var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var path       = require('path');
var cors       = require('cors');
var methodOverride = require("method-override");
var app = express();

mongoose.connect('mongodb://localhost:27017/mindmerge');

var routes = require('./config/routes');

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.get('/', function(req, res){
  res.send('hello world from express');
});

app.listen(3000);