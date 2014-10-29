/*
 * Project: simple-mobile-webapp
 */


/**
 * A Template function for the session storage and local storage.
 *
 * @param {string} __sessionKind
 * @return {Array}
 */
function storageInstanceFunction(__sessionKind) {
	return [
		'$log', '$window',
		function ($log, $window) {

			var _mStorage = $window[__sessionKind] || ($log.warn('[store] type is unknown:', __sessionKind));

			return {

				/**
				 * Returns the value from the storage object.
				 *
				 * @param {string} __key
				 * @param {*} __def
				 * @returns {string|object}
				 */
				getValue: function (__key, __def) {
					if (angular.isDefined(_mStorage.getItem(__key))) {
						var _value = _mStorage.getItem(__key);
						try {
							return JSON.parse(_value);
						}
						catch (e) {
							return _value;
						}
					}
					return __def;
				},

				/**
				 * Sets the value into the storage object.
				 *
				 * If the value is not a string, then stringify to an json string.
				 *
				 * @param {string} __key
				 * @param {string|object} __value the saved value.
				 */
				setValue: function (__key, __value) {
					if (!angular.isString(__value)) {
						__value = JSON.stringify(__value);
					}
					_mStorage.setItem(__key, __value);
				},

				exists: function (__key) {
					return angular.isDefined(_mStorage.getItem(__key));
				},

				remove: function (__key) {
					$log.debug('[store] ', __sessionKind, ' remove key ', __key);
					_mStorage.removeItem(__key);
				}
			}
		}
	];
}

angular.module('smw')
	.factory('SMW_SessionStorage', storageInstanceFunction('sessionStorage'))
	.factory('SMW_LocalStorage', storageInstanceFunction('localStorage'));
