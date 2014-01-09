'use strict';

/* Controllers */

angular.module('myApp.controllers', [])


  .controller('ChatCtrl', ['$scope', 'syncData', function($scope, syncData) {
      $scope.newMessage = {};

      // constrain number of messages by limit into syncData
      // add the array into $scope.messages
      $scope.messages = syncData('messages', 10);

      // add new messages to the list
      $scope.addMessage = function() {
         if( $scope.newMessage ) {
            $scope.messages.$add({text: $scope.newMessage.text, description: $scope.newMessage.description});
            $scope.newMessage = null;
         }
      };
   }])