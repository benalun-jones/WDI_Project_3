angular
  .module('MindMergeApp')
  .controller('GroupsController', GroupsController);


  function GroupsController() {
    var self = this;

    this.newGroup = {};
    self.all = [];
    self.group = {};
    // this.selectedGroup = {};
    // this.getGroups = getGroups;
    // this.createGroup = createGroup;
    // this.removeGroup = removeGroup;
    // this.selectGroup = selectGroup;
    // this.updateGroup = updateGroup;

    self.add = function() {
      if (group.form.$valid) {
        group.all.push(group.newGroup);
        console.log(group.all);
      }
    }

    self.updateGroup = function() {
      var group = self.selectedgroup;
      Group.update({ id: group._id }, group, function(group) {
       //update view
        var _group = self.groups.filter(function(_group){
          return _group._id === group._id;
        })[0]
        _group.title = group.title;
        _group.photo = group.photo
      });
    };

    self.getGroups = function() {
      // do some stuff here to show all groups
    }

    self.getGroup = function() {
      // do something here to show only one group - maybe on another page
    }

  }