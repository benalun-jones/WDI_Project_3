angular 
  .module('MindMergeApp')
  .factory('Task', Task);

  Task.$inject = ['$resource'];

  function Task($resource){
    var Task = $resource('http://localhost:3000/projects/:id', null, {
      'update': { method:'PATCH' }
    });

    return Task;


  }