'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
	$routeProvider.when('/blog', {templateUrl: 'partials/blog.html', controller: 'BlogController'});
	$routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});
	$routeProvider.when('/test', {templateUrl: 'partials/singlepage_template.html', controller: 'TestController'});

  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
