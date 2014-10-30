/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/startup.html',
				controller: 'SMW_StartupController',
				access: {
					needLogin: false
				}
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'SMW_LoginController',
				access: {
					needLogin: false
				}
			})
			.when('/logout', {
				templateUrl: 'views/logout.html',
				controller: 'SMW_LogoutController',
				access: {
					needLogin: true,
					role: 'user'
				}
			})
			.when('/signup', {
				templateUrl: 'views/signup.html',
				controller: 'SMW_SignupController',
				access: {
					needLogin: false
				}
			})
			.when('/agb', {
				templateUrl: 'views/agb.html',
				controller: 'SMW_AgbController',
				access: {
					needLogin: false
				}

			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'SMW_AboutController',
				access: {
					needLogin: false
				}

			})
			.when('/imprint', {
				templateUrl: 'views/imprint.html',
				controller: 'SMW_ImprintController',
				access: {
					needLogin: false
				}
			})
			.when('/home', {
				templateUrl: 'views/home.html',
				controller: 'SMW_HomeController',
				access: {
					needLogin: true,
					role: 'user'
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
