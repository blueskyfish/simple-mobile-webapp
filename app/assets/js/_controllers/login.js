/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.controller('SMW_LoginController', [
		'$scope', '$translate', '$location', 'SMW_Authentication',
		function ($scope, $translate, $location, smwAuthentication) {

			$scope.user = {
				email: '',
				password: ''
			};

			$scope.message = '';

			$translate('MSG_LOGIN_START').then(function (__msg) {
				$scope.message = __msg;
			});

			$scope.loginUser = function () {

				console.log('login:', $scope.user);

				smwAuthentication.login('Sarah', 1000, $scope.user.email, ['user', 'admin']);

				$location.path('/home');
			};
		}
	]);
