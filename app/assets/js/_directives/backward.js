/*
 * Project: simple-mobile-webapp
 */


angular.module('smw')

	.directive('backward', [
		'SMW_History',
		function (smwHistory) {

			return {
				restrict: 'E',
				template: '<button class="btn pull-left" ng-click="goBackward($event)"><i class="fa fa-chevron-left"></i></i></button>',
				scope: true,
				link: function ($scope) {

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
			}
		}
	]);