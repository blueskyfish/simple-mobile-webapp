/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.run([
		'$rootScope', '$location', '$log', 'SMW_Authentication',
		function ($rootScope, $location, $log, smwAuthentication) {

			'use strict';

			$rootScope.$on('$routeChangeStart', function (event, __data) {
				var _access = __data.$$route.access;
				$log.debug('[route] access ', _access);
				if (_access && _access.needLogin === true) {
					if (!smwAuthentication.isAuthInRoles(_access.role)) {
						$log.debug('[route] cancel of ', __data.$$route.originalPath, ', go to "/login"');
						$location.path('/login');
						return;
					}
				}

				console.log('route start: ', __data.$$route);
			});
		}
	]);
