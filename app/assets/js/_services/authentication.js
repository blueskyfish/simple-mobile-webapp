/*
 * Project: simple-mobile-webapp
 */

angular.module('smw')

/**
 *
 */
.factory('SMW_Authentication', [

	function () {

		var _mUser = null;

		function _isLoggedIn() {
			if (_mUser !== null) {
				return _mUser.userId !== 0;
			}
			return false;
		}

		function _isAuthInRoles(__role) {
			if (_mUser !== null) {
				return _mUser.roles.indexOf(__role) >= 0;
			}
			return false;
		}

		// Public API
		return {

			/**
			 * @ngdoc method
			 * @name SMW_Authentication.method:isUserLoggedIn
			 * @description
			 * Returns true, if the user is logged in, otherwise it returns false.
			 *
			 * @returns {boolean}
			 */
			isLoggedIn: function () {
				return _isLoggedIn();
			},

			/**
			 * Checks whether the role is in the user roles.
			 *
			 * @param {string} __role the role
			 * @returns {boolean}
			 */
			isAuthInRoles: function (__role) {
				return _isAuthInRoles(__role);
			},

			/**
			 * Set the login data.
			 *
			 * @param {string} __name
			 * @param {string} _userId
			 * @param {string} __email
			 * @param {Array|string} __roles
			 */
			login: function (__name, _userId, __email, __roles) {
				_mUser = {
					name: __name,
					userId: _userId,
					email: __email,
					roles: angular.isArray(__roles) ? __roles : __roles.split(',')
				};
			},

			logout: function () {
				_mUser = null;
			},

			getUser: function () {
				return angular.copy(_mUser);
			}
		};
	}
]);
