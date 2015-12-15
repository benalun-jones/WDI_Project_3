angular
  .module('MindMergeApp')
  .controller('GroupsController', GroupsController);


  function GroupsController() {
    var group = this;

    this.newGroup = {};
    group.all = [];
    this.selectedGroup = {};
    // this.getGroups = getGroups;
    // this.createGroup = createGroup;
    // this.removeGroup = removeGroup;
    // this.selectGroup = selectGroup;
    // this.updateGroup = updateGroup;

    group.add = function() {
      if (group.form.$valid) {
        group.all.push(group.newGroup);
        console.log(group.all);
      }
    }

    this.updateGroup = function() {
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

  }