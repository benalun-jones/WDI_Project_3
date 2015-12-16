angular 
  .module('MindMergeApp')
  .factory('Group', Group);

  Group.$inject = ['$resource', 'API_URL'];

  function Group($resource, API_URL){
    return $resource(API_URL+'/groups/:id', null, {
      'query': {method: 'GET', params: {}, isArray: true },
      'update': { method:'PUT' },
      'create': { method: 'POST' },
      'save': {method: 'POST' }
    });
  }


