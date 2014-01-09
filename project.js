angular.module('project', ['firebase'])

	.constant('REMOTE_SERVER', 'https://sandbox-auth.firebaseio.com')

	.controller('MainController', ['$rootScope', '$scope', 'REMOTE_SERVER', '$firebaseAuth', '$log', function ($rootScope, $scope, REMOTE_SERVER, $firebaseAuth, $log) {

		var auth = $firebaseAuth(new Firebase(REMOTE_SERVER));

		$scope.login = function(mode) {
			auth.$login(mode);
		};

		$scope.logout = function() {
			auth.$logout();
		};

		$rootScope.$on("$firebaseAuth:login", function(e, user) {
			$log.info('Login : ' + user.displayName);
			$scope.output = user;
		});

		$rootScope.$on("$firebaseAuth:logout", function(e, user) {
			$log.info('Logout');
			$scope.output = null;
		});

	}]);