var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var userController = require('../controllers/users_controller');

app.get('/api/users', function(req, res) {

  });

app.post('/api/users', function(req, res) {

  });

app.delete('/api/users/:user_id', function(req, res) {

  });

module.exports = router;