

angular.module('smw')

	.directive('sidebar', [

		function () {

			return {
				restrict: 'E',
				transclude: true,
				replace: true,
				template: '<div class="sidebar {{position}}" id="{{ sidebarId }}" ng-transclude></div>',
				scope: {
					position: '@',
					sidebarId: '@'
				}
			};
		}
	]);
