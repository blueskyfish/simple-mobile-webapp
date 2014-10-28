/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.controller('SMW_HomeController', [
		'$scope', 'SMW_Authentication',
		function ($scope, smwAuthentication) {

			$scope.user = smwAuthentication.getUser();

		}
	]);