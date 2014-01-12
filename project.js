angular.module('project', ['firebase'])

	.constant('REMOTE_SERVER', 'https://sandbox-auth.firebaseio.com')

	.controller('MainController', ['$rootScope', '$scope', 'REMOTE_SERVER', '$firebaseAuth', '$firebase', '$log', function ($rootScope, $scope, REMOTE_SERVER, $firebaseAuth, $firebase, $log) {

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
			
			$scope.findData('/users/' + user.uid).$set(new Date().toLocaleString());
		});

		$rootScope.$on("$firebaseAuth:logout", function(e, user) {
			$log.info('Logout');
			$scope.output = null;
		});

		$scope.sendData = function() {
			$scope.findData('/public').$set('Public at ' + new Date().toLocaleString());
			$scope.findData('/users/' + $scope.output.uid).$set(new Date().toLocaleString());
		};

		$scope.findData = function(link, value) {
			var ref = new Firebase(REMOTE_SERVER + link);
			return $firebase(ref);
		};

	}]);