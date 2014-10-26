/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/startup.html'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'SMW_AboutController'
			})
			.when('/imprint', {
				templateUrl: 'views/imprint.html',
				controller: 'SMW_ImprintController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
