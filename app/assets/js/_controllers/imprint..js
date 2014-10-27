/*
 * Project: simple-mobile-webapp
 */



angular.module('smw')

	.controller('SMW_ImprintController', [
		'$scope', 'SMW_History',
		function ($scope, smwHistory) {


			$scope.goBackward = function ($event) {
				$event.stopPropagation();

				if (smwHistory.isAvailable()) {
					smwHistory.backward();
				}
				else {
					smwHistory.goHome();
				}
				return false;
			}

		}
	]);
