/*
 * Project: simple-mobile-webapp
 */


angular.module('smw')

	.directive('backward', [
		'$window',
		function ($window) {

			return {
				restrict: 'E',
				template: '<button class="btn pull-left" ng-click="goBackward($event)"><i class="fa fa-chevron-left"></i></i></button>',
				scope: true,
				link: function ($scope) {

					$scope.goBackward = function ($event) {
						$event.stopPropagation();

						$window.history.back();

						return false;
					}

				}
			}
		}
	]);