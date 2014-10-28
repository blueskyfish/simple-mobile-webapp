/*
 * Project: simple-mobile-webapp
 */


angular.module('smw')


	.factory('SMW_History', [
		'$rootScope', '$location',
		function ($rootScope, $location) {

			var _mHistories = [];

			function _addHistory(__path) {
				var _len = _mHistories.length,
					_lastPath;

				if (__path === '') {
					return;
				}

				_lastPath = _len > 0 ? _mHistories[_len - 1] : null;
				if (__path === _lastPath) {
					console.log('former path is already inside:', _lastPath);
					return;
				}
				_mHistories.push(__path);
				console.log('add path:', __path);
				console.log('history: ', _mHistories);
			}

			function _isAvailable() {
				return _mHistories.length >= 2;
			}

			function _backward() {
				var _len = _mHistories.length,
					_path = _mHistories[_len - 2];

				console.log('backward before', _mHistories);
				_mHistories.splice(_len - 2);
				console.log('backward after', _mHistories);
				$location.path(_path);
			}

			// Public API
			return {

				/**
				 *
				 * @param {string} __path
				 */
				addHistory: function (__path) {
					_addHistory(__path);
				},

				isAvailable: function () {
					return _isAvailable();
				},

				backward: function () {
					_backward();
				},

				go: function (__path) {
					$location.path(__path);
				},

				goHome: function () {
					$location.path('/');
				}
			}
		}
	]);