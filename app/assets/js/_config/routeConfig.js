/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/startup.html'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'SMW_LoginController'
			})
			.when('/agb', {
				templateUrl: 'views/agb.html',
				controller: 'SMW_AgbController'
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
