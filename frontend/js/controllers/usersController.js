angular
  .module('MindMergeApp')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['$http'];
  function UsersController($http){
    var self = this;
    self.all = [];
    self.newUser = {};
    self.profile = {};
    self.selectedUser = {};
    self.getUsers = getUsers;
    // self.createUser = createUser;
    // self.removeUser = removeUser;
    // self.selectUser = selectUser;
    // self.updateUser = updateUser;
    // self.toggleEditForm = toggleEditForm;
    // self.toggleUserForm = toggleUserForm;
    // self.showUserProfile = showUserProfile;
    // self.toggleShowUsers = toggleShowUsers;

    function getUsers(){
      $http
      .get('http://localhost:3000/users')
      .then(function(response){
        self.all = response.data.users;
      });
    }

    self.isLoggedIn = function() {
      return !!TokenService.getToken();
    }
    if (self.isLoggedIn ()){
      self.getUsers();
      self.user = TokenService.getUser();
    }



    // function toggleShowUsers(){
    //   $("#show").slideUp("slow");
    //   $("#projects").slideUp("slow");
    //   setTimeout(function(){
    //     self.profile = {};
    //     $('#users').slideDown()
    //   }, 600);
    // }

    // function toggleUserForm(){
    //   $("form#new-user").slideToggle("slow");
    // }

    // function toggleEditForm(){
    //   $("form#edit-user").slideToggle("slow");
    // }

    // function showUserProfile(id){
    //   $('#users').slideUp();
    //   $http
    //   .get('http://localhost:3000/users/' + id)
    //   .then(function(response){
    //     self.profile = response.data
    //     $('#show').slideDown();
    //     $('#projects').slideDown();
    //   });
    // }

    // function createUser(){
    //   $http
    //   .post('http://localhost:3000/users', { user: self.newUser })
    //   .then(function(response){
    //     self.all.push(self.newUser);
    //     toggleUserForm();
    //     $('form#new-user').trigger("reset");
    //   });
    // }

    // function removeUser(user){
    //   $http
    //     .delete('http://localhost:3000/users/' + user._id)
    //     .then(function(response){
    //       console.log("arrived")
    //       var index = self.all.indexOf(user);
    //       self.all.splice(index, 1);
    //     });
    // }

    // function selectUser(user){
    //   toggleEditForm();
    //   self.selectedUser = user;
    // }

    // function updateUser(){
    //   $http
    //     .patch('http://localhost:3000/users/' + self.selectedUser._id, { user: self.selectedUser})
    //     .then(function(response){
    //       getUsers();
    //       toggleEditForm();
    //     })
    // }

    getUsers();

  }