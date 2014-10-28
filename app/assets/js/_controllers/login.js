/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.controller('SMW_LoginController', [
		'$scope', '$translate',
		function ($scope, $translate) {

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

				var sss = $translate('MSG_LOGIN_SUCCESS', { username: $scope.user.email }).then(function (__msg) {
					console.log(arguments);
					$scope.message = __msg;
				});

				console.log(sss);
			};
		}
	]);
