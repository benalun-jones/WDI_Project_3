angular 
  .module('MindMergeApp')
  .factory('Group', Group);

  Group.$inject = ['$resource'];

  function Group($resource){
    var Group = $resource('http://localhost:3000/projects/:id', null, {
      'update': { method:'PATCH' }
    });

    return Group;


  }