'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    //'myApp.view1',
    //'myApp.view2',
    'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
        templateUrl: 'partials/view1.html',
        //controller: 'View1Ctrl'
    }).
    when('/view2', {
        templateUrl: 'partials/view2.html',
        //controller: 'View1Ctrl'
    }).
    otherwise({
        templateUrl: 'partials/404.html'
    });

}]);

app.controller('View1Ctrl', [function() {

}]);
/*
 var app = angular.module('app', [
 'ngRoute',      //$routeProvider
 'mgcrea.ngStrap'//bs-navbar, data-match-route directives
 ]);

 app.config(['$locationProvider','$routeProvider',
 function($locationProvider,$routeProvider) {
 $locationProvider.hashPrefix('!');
 $routeProvider.
 when('/', {
 templateUrl: 'partials/index.html'
 }).
 when('/about', {
 templateUrl: 'view1'
 }).
 when('/contact', {
 templateUrl: 'partials/contact.html'
 }).
 when('/login', {
 templateUrl: 'partials/login.html'
 }).
 otherwise({
 templateUrl: 'partials/404.html'
 });
 }
 ]);
 */