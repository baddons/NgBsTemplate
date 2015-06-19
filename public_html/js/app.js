
var myApp = angular.module('myApp', [
  'ngRoute',
  'appControllers'
]);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
      }).
      when('/about', {
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      }).
      when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
      }).
    otherwise({
        redirectTo: '/'
      });
  }]);