/*
 * Project: simple-mobile-webapp
 */


angular.module('smw')

	.run(['SMW_History', function (smwHistory) {

		// TODO add here the general run tasks
		smwHistory.initialize();
	}]);