/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

/**
 * @ngdoc service
 * @name SMW_Authentication
 * @description
 * Handles the roles of the current user. If there is no user, then it does not contains information.
 */
.factory('SMW_Authentication', [
	'SMW_SessionStorage',
	function (smwSessionStorage) {

		// members

		var _mUserId = smwSessionStorage.getValue('/authentication/userId', -1),
			_mUserRoles = smwSessionStorage.getValue('/authentication/userRoles', null);

		// internal implementation

		function _isLoggedIn() {
			return _mUserId > 0;
		}

		function _isAuthInRoles(__role) {
			if (_isLoggedIn() && _mUserRoles !== null) {
				return _mUserRoles.indexOf(__role) >= 0;
			}
			return false;
		}

		function _login(__userId, __roles) {
			_mUserId = __userId;
			_mUserRoles = angular.isArray(__roles) ? __roles : __roles.split(',');
			smwSessionStorage.setValue('/authentication/userId', _mUserId);
			smwSessionStorage.setValue('/authentication/userRoles', _mUserRoles);
		}

		function _logout() {
			_mUserId = -1;
			_mUserRoles = null;
			smwSessionStorage.remove('/authentication/userId');
			smwSessionStorage.remove('/authentication/userRoles');
		}

		// public API
		return {

			/**
			 * @ngdoc method
			 * @name SMW_Authentication.method:isLoggedIn
			 * @description
			 * Returns true, if the user is logged in, otherwise it returns false.
			 *
			 * @returns {boolean}
			 */
			isLoggedIn: function () {
				return _isLoggedIn();
			},

			/**
			 * @ngdoc method
			 * @name SMW_Authentication.method:isAuthInRoles
			 * @description
			 * Checks whether the role is in the user roles.
			 *
			 * @param {string} __role the role
			 * @returns {boolean}
			 */
			isAuthInRoles: function (__role) {
				return _isAuthInRoles(__role);
			},

			/**
			 * @ngdoc method
			 * @name SMW_Authentication.method:login
			 * @description
			 * Set the login information.
			 *
			 * @param {string} __userId
			 * @param {Array|string} __roles
			 */
			login: function (__userId, __roles) {
				_login(__userId, __roles);
			},

			/**
			 * @ngdoc method
			 * @name SMW_Authentication.method:logout
			 * @description
			 * Reset the logged in user.
			 */
			logout: function () {
				_logout();
			}
		};
	}
]);
