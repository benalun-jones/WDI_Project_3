var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var userController = require('../controllers/users_controller');
var taskController = require('../controllers/tasks_controller');
// var groupController = require('../controllers/')

router.route('/users')
  .get(userController.getAll)
  .post(userController.createUser);

router.route('/users/:id')
  .get(userController.getUser)
  .put(userController.updateUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/tasks')
  .get(taskController.getAll)
  .post(taskController.createTask);

router.route('/tasks/:id')
  .get(taskController.getTask)
  .put(taskController.updateTask)
  .patch(taskController.updateTask)
  .delete(taskController.deleteTask);

  router.route('/groups')
    .get(groupController.getAll)
    .post(groupController.createGroup);

  router.route('/groups/:id')
    .get(groupController.getGroup)
    .put(groupController.updateGroup)
    .patch(groupController.updateGroup)
    .delete(groupController.deleteGroup);


// router.route('/auth/facebook')
//   .post(authenticationsController.facebook);

// ## router.post('/login', authenticationsController.login);
// ## router.post('/register', authenticationsController.register);

// ## routes required for application


module.exports = router;