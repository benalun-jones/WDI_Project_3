var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose       = require('mongoose');
var path = require('path');

var app = express();
// var passport       = require('passport');
var methodOverride = require("method-override");
// var MongooseVoting = require('mongoose-voting');
// var jwt            = require('jsonwebtoken');
// var expressJWT     = require('express-jwt');

mongoose.connect('mongodb://localhost:27017/mindmerge');

// app.use(methodOverride(function(req, res){
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     var method = req.body._method
//     delete req.body._method
//     return method
//   }
// }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));


// var config         = require('./config/routes');
// var User           = require('./models/user');
// var Group          = require('./models/group');
// var Task       = require('./models/task');

var routes = require('./config/routes');
app.use("/api", routes);

app.get('/', function(req, res){
  res.send('hello world from express');
});

app.post('/users', function(req, res) {

});

app.listen(3000);