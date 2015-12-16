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

  this.addTask = function() {
    if (self.task._id) {
      Task.update(self.task, function(){
        self.task = {};
      });
    } else {
      Task.save(self.task, function(data) {
        self.tasks.push(data.task);
        self.task = {};
      });
    }
  };

  this.deleteTask = function(task){
    Task.delete({id: task._id});
    var index = self.tasks.indexOf(task);
    self.tasks.splice(index, 1);
  }

}
