angular
  .module('MindMergeApp', ['satellizer', 'ui.bootstrap', 'ui.router'])
  .constant('API_URL', 'http://localhost:3000')
  .config(oauthConfig)
  .config(MainRouter);

oauthConfig.$inject = ['API_URL', '$authProvider'];
function oauthConfig(API_URL, $authProvider) {
  $authProvider.facebook({
    url: API_URL + '/auth/facebook', // the route that will handle the request from facebook
    clientId: '718212778314279'  // your facebook client id
  });
}

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
      });

      $urlRouterProvider.otherwise("/");

  }
