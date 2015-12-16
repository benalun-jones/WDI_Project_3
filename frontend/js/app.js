angular
  .module('MindMergeApp', ['satellizer', 'ui.router', 'ngResource'])
  .constant('API_URL', 'http://localhost:3000')
  .config(oauthConfig)
  .config(MainRouter);

oauthConfig.$inject = ['API_URL', '$authProvider'];

function oauthConfig(API_URL, $authProvider) {
  $authProvider.facebook({
    url: API_URL + '/auth/facebook', 
    clientId: '718212778314279' 
  });
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "home.html"
    })
    .state('profile', {
      url: "/profile",
      templateUrl: "profile.html"
    })
    .state('groups', {
      url: "/groups",
      templateUrl: "group.html"
    })
    .state('howto', {
      url: "/howto",
      templateUrl: "howto.html"
    })
    .state('addgroup', {
      url: "/addgroup",
      templateUrl: "addgroup.html"
    })
    .state('tasks', {
      url: "/tasks",
      templateUrl: "task.html"
    })
    .state('addtask', {
      url: "/addtask",
      templateUrl: "addtask.html"
    });
  
  $urlRouterProvider.otherwise("/");
}










