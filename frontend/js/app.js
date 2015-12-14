angular
  .module('MindMergeApp', ['satellizer'])
  .constant('API_URL', 'http://localhost:3000') // your api url here
  .config(oauthConfig);

oauthConfig.$inject = ['API_URL', '$authProvider'];
function oauthConfig(API_URL, $authProvider) {
  $authProvider.facebook({
    url: API_URL + '/auth/facebook', // the route that will handle the request from facebook
    clientId: '718212778314279'  // your facebook client id
  });
}