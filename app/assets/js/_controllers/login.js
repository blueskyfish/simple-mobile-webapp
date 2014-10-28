/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.controller('SMW_LoginController', [
		'$scope', '$translate', 'SMW_Authentication', 'SMW_History',
		function ($scope, $translate, smwAuthentication, smwHistory) {

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
				
				smwHistory.go('/home');
			};
		}
	]);
