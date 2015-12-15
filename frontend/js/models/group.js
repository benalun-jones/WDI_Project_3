angular 
  .module('MindMergeApp')
  .factory('Group', Group);

  Group.$inject = ['$resource'];

  function Group($resource){
    var Group = $resource('http://localhost:3000/projects/:id', null, {
      'update': { method:'PATCH' }
      'create': { method: 'POST' }
    });

    methods = angular.extend( defaults, methods );

    group.prototype.$save = function() {
          if ( !this.id ) {
           return this.$create();
         }
       else {
          return this.$update();
        }
      };
    
    return Group;
  }