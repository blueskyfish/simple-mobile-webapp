
angular.module('smw')
	.directive('inputText', [
		function () {
			return {
				restrict: 'E',
				replace: true,
				template: '<div class="input-row"><label>{{ label | translate }}</label><input type="{{ type }}" placeholder="{{ placeholder | translate }}" ng-model="model"></div>',
				scope: {
					label: '=',
					placeholder: '=',
					model: '=',
					type: '='
				}
			};
		}
	]);


