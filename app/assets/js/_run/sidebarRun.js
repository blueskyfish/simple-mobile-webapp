

angular.module('smw')

	.run(['$rootScope', '$log', function ($rootScope, $log) {

		'use strict';

		var _backdrop = angular.element('#backdrop');

		function __closeSidebar() {
			var _sidebarId = _backdrop.attr('data-sidebar-id'),
				_sidebar = angular.element(_sidebarId);
			_backdrop.off('click').css('display', 'none').removeAttr('data-sidebar-id');
			_sidebar.removeClass('visible').css('display', 'none').off('click');
		}

		$rootScope.$on('SMW_eventShowSidebar', function (event, __sidebarId) {

			var _sidebar = angular.element(__sidebarId);
			if (_sidebar.length === 0) {
				$log.debug('[side] id ', __sidebarId, ' is not found');
				return;
			}
			_sidebar.css('display', 'block').addClass('visible').on('click', __closeSidebar);
			_backdrop.css('display', 'block').on('click', __closeSidebar).attr('data-sidebar-id', __sidebarId);
		});

		$rootScope.$on('SMW_eventHideSidebar', function (event) {
			__closeSidebar();
		})

	}]);
