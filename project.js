angular.module('project', ['firebase'])

	.constant('REMOTE_SERVER', 'https://sandbox-auth.firebaseio.com')

	.controller('MainController', ['$scope', 'REMOTE_SERVER', function ($scope, REMOTE_SERVER) {
	
		$scope.output = 'Hello Controller !!!'
	
	}]);