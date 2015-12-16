angular
.module('MindMergeApp')
.controller('TasksController', TasksController);

TasksController.$inject = ['Task', '$resource', 'Group', '$stateParams'];
function TasksController(Task, $resource, Group, $stateParams) {

  var self = this;
  this.task = {}
  this.tasks = Task.query();

  this.selectTask = function(task) {
    self.selectedTask = Task.get({ id: task._id });
  };

  this.addTask = function() {
    if (self.task._id) {
      Task.update({ id: self.task._id }, self.task, function(){
        self.task = {};
      });
    } else {
      Task.create(self.task, function(data) {
        self.tasks.push(data.task);
        self.task = {};
      });
    }
  };

  this.getGroups = function() {
    self.groups = Group.query();
  };

  this.findByGroup = function() {
    this.tasks =Task.query({group: $stateParams._id})
  }

  this.deleteTask = function(task){
    Task.delete({id: task._id});
    var index = self.tasks.indexOf(task);
    self.tasks.splice(index, 1);
  }

   this.editTask = function(task){
    self.task = task;
  }

}
