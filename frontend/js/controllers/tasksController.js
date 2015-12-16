angular
  .module('MindMergeApp')
  .controller('TasksController', TasksController);

  TasksController.$inject = ['Task', '$resource'];
  function GroupsController(Group, $resource) {

    var self = this;
    this.task = {}
    this.tasks = Task.query();

  }
