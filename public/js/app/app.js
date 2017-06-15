var app = angular.module('consortiumApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	   .when('/resources/', {
	    templateUrl: '../views/resources.html'
	  })
});