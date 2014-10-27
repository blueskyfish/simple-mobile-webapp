/*
 * Project: simple-mobile-webapp
 */


angular.module('smw')


	.factory('SMW_History', [
		'$rootScope', '$location',
		function ($rootScope, $location) {

			var _mHistories = [];

			// register for the event "$routeChangeSuccess"
			$rootScope.$on('$routeChangeSuccess', function (ev, __data) {
				var _path = __data.$$route.originalPath,
					_len = _mHistories.length,
					_lastPath;
				if (_path === '') {
					return;
				}
				_lastPath = _len > 0 ? _mHistories[_len - 1] : null;
				if (_path === _lastPath) {
					console.log('former path is already inside:', _lastPath);
					return;
				}
				_mHistories.push(_path);
			});


			function _isAvailable() {
				return _mHistories.length >= 2;
			}

			function _backward() {
				var _len = _mHistories.length,
					_path = _mHistories[_len - 2];

				_mHistories.splice(_len - 2);
				$location.path(_path);
			}

			// Public API
			return {

				initialize: function () {
					// nothing to do
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