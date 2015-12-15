angular 
  .module('MindMergeApp')
  .factory('User', User);

  User.$inject = ['$resource'];

  function User($resource){
    var User = $resource('http://localhost:3000/projects/:id', null, {
      'update': { method:'PATCH' },
      'create': { method: 'post' }
    });

    return User;


  }