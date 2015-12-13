var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var userController = require('../controllers/users_controller');

router.route('/users')

.get(userController.getAll)

.post(userController.createUser);

router.route('/users/:id')

.get(userController.getUser);

module.exports = router;