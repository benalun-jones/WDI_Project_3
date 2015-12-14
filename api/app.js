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

// angular
//   .module('YourAppName', ['satellizer'])
//   .constant('API_URL', 'http://localhost:3000') // your api url here
//   .config(oauthConfig);

// oauthConfig.$inject = ['$authProvider'];
// function oauthConfig($authProvider) {
//   $authProvider.facebook({
//     url: API_URL + '/auth/facebook', // the route that will handle the request from facebook
//     clientId: // your facebook client id
//   });
// }

app.listen(3000);