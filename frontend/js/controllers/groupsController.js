angular
.module('MindMergeApp')
.controller('GroupsController', GroupsController);

GroupsController.$inject = ['Group', '$resource'];
function GroupsController(Group, $resource) {

  var self = this;
  this.group = {}

  this.groups = Group.query();
  
  this.selectGroup = function(group) {
    self.selectedGroup = Group.get({ id: group._id });
  };

  this.addGroup = function() {
    if (self.group._id) {
      Group.update(self.group, function(){
        self.group = {};
      });
    } else {
      Group.save(self.group, function(data) {
        self.groups.push(data.group);
        self.group = {};
      });
    }
  };

  this.deleteGroup = function(group){
    Group.delete({id: group._id});
    var index = self.groups.indexOf(group);
    self.groups.splice(index, 1);
  }

  this.editGroup = function(group){
   self.group = group;
 }

}