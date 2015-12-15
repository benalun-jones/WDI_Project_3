angular
.module('MindMergeApp')
.controller('GroupsController', GroupsController);

GroupsController.$inject = ['Group'];
function GroupsController(Group) {
  var self = this;
  self.groups = Groups.query();
  self.newGroup = {};
  self.all = [];
  self.group = {};
  self.newGroup = {};
    // self.selectedGroup = {};
    // self.getGroups = getGroups;
    //self.getGroup = getGroup;
    // self.createGroup = createGroup;
    // self.removeGroup = removeGroup;
    // self.selectGroup = selectGroup;
    // self.updateGroup = updateGroup;

    // self.createGroup = function() {
    //   console.log(self.group.form)
    //   if (self.group.form.$valid) {
    //     console.log("click")
    //     Group.save(self.newGroup, function(group) { 
    //       self.all.push(group);
    //       self.newGroup = {};
    //     })
        

    //     console.log(self.all);
    //   }
    // }

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

    self.selectGroup = function(group) {
      self.selectedGroup = Group.get({ id: group._id });
    };

    self.deleteGroup = function(group){
      Group.delete({id: group._id});
      var index = self.groups.indexOf(group);
      self.groups.splice(index, 1);
    }

    self.editGroup = function(group){
       self.group = group;
     }



    // self.getGroups = function() {
    //   // do some stuff here to show all groups
    // }

    // self.getGroup = function() {
    //   // do something here to show only one group - maybe on another page
    // }

  }