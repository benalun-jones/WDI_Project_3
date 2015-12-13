var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var userController = require('../controllers/users_controller');

router.route('/users')

.get(usersController.getAll)

.post(usersController.createUser);

router.route('/users/:id')

.get(usersController.getUser)

.patch(usersController.updateUser)

.delete(usersController.removeUser);

module.exports = router;