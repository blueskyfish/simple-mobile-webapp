/*
 * Project: simple-mobile-webapp
 */


angular.module('smw')

	.controller('SMW_AboutController', [
		'$scope', 'SMW_History',
		function ($scope, smwHistory) {


			$scope.goBackward = function () {
				if (smwHistory.isAvailable()) {
					smwHistory.backward();
				}
				else {
					smwHistory.go('/');
				}
			}

		}
	]);
