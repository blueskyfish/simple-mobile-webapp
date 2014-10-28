/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

/**
 * @ngdoc constant
 * @name SMW_AuthRoles
 * @description
 * An array with the rules
 */
.constant('SMW_AuthRoles', [
	'user',     // a normal user
	'admin'     // a user with admin rights
]);
