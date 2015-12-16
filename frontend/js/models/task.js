angular 
  .module('MindMergeApp')
  .factory('Task', Task);

  Task.$inject = ['$resource', 'API_URL'];

  function Task($resource, API_URL){
    return $resource(API_URL+'/tasks/:id', null, {
      'query': {method: 'GET', params: {}, isArray: true },
      'update': { method:'PUT' },
      'create': { method: 'POST' },
      'save': {method: 'POST' }
    });
  }


