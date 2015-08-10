'use strict';


angular
.module('samma',[
	'timer'
]);

angular.module('samma')
.controller('MainCtrl', ['$scope', MainCtrl]);

function MainCtrl($scope) {
	var ipc = require('ipc');
 	$scope.timerRunning = false;
 
  $scope.startTimer = function (){
    $scope.$broadcast('timer-start');
    $scope.timerRunning = true;
	};
 
  $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
  };

  $scope.$on('timer-stopped', function (event, data){
      console.log('Timer Stopped - data = ', data);
  });

  $scope.quitApp = function() {
  	ipc.send('quit', '');
  };
}