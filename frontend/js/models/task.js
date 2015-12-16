angular 
  .module('MindMergeApp')
  .factory('Task', Task);

  Task.$inject = ['$resource', 'API_URL'];

  function Task($resource){
    var Task = $resource('http://localhost:3000/projects/:id', null, {
      'update': { method:'PATCH' },
      'create': { method: 'post' }
    });

    return Task;


  }