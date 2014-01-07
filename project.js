angular.module('project', ['firebase'])

	.constant('REMOTE_SERVER', 'https://sandbox-auth.firebaseio.com')

	.controller('MainController', ['$scope', 'REMOTE_SERVER', '$firebaseAuth', '$log', function ($scope, REMOTE_SERVER, $firebaseAuth, $log) {

		var auth = $firebaseAuth(new Firebase(REMOTE_SERVER), {
			'callback' : function() {
				$log.info('Refresh : ' + (auth.user != null ? auth.user.email : '(no-user)'));
				$scope.output = auth.user;
			}
		});

		$scope.login = function() {
			$log.info('Login');
			auth.$login('password', {
				  email: 'mail@mail.com',
				  password: 'password'
			});
		};

		$scope.logout = function() {
			$log.info('Logout');
			auth.$logout();
		};

	}]);