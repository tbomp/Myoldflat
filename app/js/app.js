'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp',
      ['myApp.config', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'firebase', 'ngRoute']
   )

   // configure views; note the authRequired parameter for authenticated pages
   .config(['$routeProvider', function($routeProvider) {

      $routeProvider.when('/flats', {
         templateUrl: 'partials/flats.html',
         controller: 'ChatCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/flats'});
   }]);