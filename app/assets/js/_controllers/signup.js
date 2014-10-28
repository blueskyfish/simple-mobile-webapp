/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.controller('SMW_SignupController', [
		'$scope', '$translate',
		function ($scope, $translate) {

			$scope.user = {
				name: '',
				email: '',
				password: '',
				agb: false
			};

			$scope.message = '';

			$translate('MSG_SIGNUP_START').then(function (__msg) {
				$scope.message = __msg;
			});

			$scope.checkAGB = function () {
				$scope.user.agb = !$scope.user.agb;
			};

			$scope.signupUser = function () {

			}
		}
	]);