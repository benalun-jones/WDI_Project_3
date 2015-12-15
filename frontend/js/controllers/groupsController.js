angular
  .module('MindMergeApp')
  .controller('GroupsController', GroupsController);


  function GroupsController() {
    var group = this;

    this.newGroup = {};
    group.all = [];

    group.add = function() {
      if (group.form.$valid) {
        group.all.push(group.newGroup);
        console.log(group.all);
      }
    }

  }

  $resource("http://localhost:3000/api/group/:id", null, {
    'update': { method: 'PUT' }
  });