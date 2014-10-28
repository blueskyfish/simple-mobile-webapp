/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.run([
		'$rootScope', '$location', 'SMW_History',
		function ($rootScope, $location, smwHistory) {


			$rootScope.$on('$routeChangeStart', function (event, __data) {
				var _access = __data.$$route.access;
				if (_access && _access.needLogin === true) {
					// TODO
				}
				console.log('route start: ', __data);
			});

			$rootScope.$on('$routeChangeSuccess', function (event, __data) {
				smwHistory.addHistory(__data.$$route.originalPath);
			});
		}
	]);