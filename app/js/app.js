'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: GenericViewCtrl});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: GenericViewCtrl});
    $routeProvider.when('/resume', {templateUrl: 'partials/resume.html', controller: GenericViewCtrl});
    $routeProvider.when('/blog', {templateUrl: 'partials/blog.html', controller: GenericViewCtrl});
	$routeProvider.when('/test', {templateUrl: 'partials/singlepage_template.html', controller: GenericViewCtrl});

	
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
