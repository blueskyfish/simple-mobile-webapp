/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.controller('SMW_HomeController', [
		'$scope',
		function ($scope) {

			$scope.showSidebar = function () {
				$scope.$emit('SMW_eventShowSidebar', '#homeSidebar');
			};
		}
	]);