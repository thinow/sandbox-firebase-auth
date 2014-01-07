angular.module('project', ['firebase'])

	.constant('REMOTE_SERVER', 'https://sandbox-auth.firebaseio.com')

	.controller('MainController', ['$scope', 'REMOTE_SERVER', '$firebaseAuth', function ($scope, REMOTE_SERVER, $firebaseAuth) {

		var auth = $firebaseAuth(new Firebase(REMOTE_SERVER));

		$scope.login = function() {
			auth.$login('password', {
				  email: 'mail@mail.com',
				  password: 'password'
			});
		};

		$scope.logout = function() {
			auth.$logout();
		};

		$scope.refresh = function() {
			$scope.output = auth.user;
		};

	}]);