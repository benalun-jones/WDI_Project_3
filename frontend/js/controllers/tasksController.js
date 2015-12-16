angular
.module('MindMergeApp')
.controller('TasksController', TasksController);

TasksController.$inject = ['Task', '$resource'];
function GroupsController(Group, $resource) {

  var self = this;
  this.task = {}
  this.tasks = Task.query();

  this.selectTask = function(task) {
    self.selectedTask = Task.get({ id: task._id });
  };

}
