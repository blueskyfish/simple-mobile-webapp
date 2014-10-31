/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.directive('inputCheck', [

		function () {

			var _nextId = 1000,
				_defaultIconOff = 'fa-toggle-off',
				_defaultIconOn = 'fa-toggle-on';

			return {
				restrict: 'E',
				replace: true,
				template: '<div class="input-row smw-input-check" ng-click="checkClicked()"><span class="label"><i class="fa {{ icon }}"></i></span><label for="check_{{ id }}">{{ label | translate }}</label><input type="{{ type }}" id="check_{{ id }}" ng-model="model"></div>',
				scope: {
					type:    '@',
					label:   '@',
					iconOff: '@',
					iconOn:  '@',
					model:   '='
				},
				link: function ($scope) {

					$scope.id = ++_nextId;
					$scope.iconOff = $scope.iconOff ? $scope.iconOff : _defaultIconOff;
					$scope.iconOn = $scope.iconOn ? $scope.iconOn : _defaultIconOn;

					$scope.icon = $scope.model ? $scope.iconOn : $scope.iconOff;

					$scope.checkClicked = function () {
						$scope.icon = $scope.model ? $scope.iconOn : $scope.iconOff;
					}
				}
			}
		}
	]);