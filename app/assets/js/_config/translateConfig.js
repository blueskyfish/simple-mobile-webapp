/*
 * Project: simple-mobile-webapp
 */


angular.module('smw')
	.config(['$translateProvider', function ($translateProvider) {

		$translateProvider.useStaticFilesLoader({
			prefix: 'assets/i18n/lang-',
			suffix: '.json'
		});


		$translateProvider.preferredLanguage('de');
	}]);