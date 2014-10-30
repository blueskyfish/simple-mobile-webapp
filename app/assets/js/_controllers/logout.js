/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.controller('SMW_LogoutController', [
		'$scope', '$translate', '$location', 'SMW_Authentication',
		function ($scope, $translate, $location, smwAuthentication) {

			$scope.message = '';

			$translate('MSG_LOGOUT', { username: 'Mulder3' }).then(function (__msg) {
				$scope.message = __msg;
			});

			$scope.logoutUser = function () {
				smwAuthentication.logout();
				$location.path('/');
			}

		}
	]);

