angular.module('project', ['firebase'])

	.controller('MainController', ['$scope', function ($scope) {
	
		$scope.output = 'Hello Controller !!!'
	
	}]);