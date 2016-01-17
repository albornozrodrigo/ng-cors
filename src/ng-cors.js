(function() {

	'use strict';

	angular
		.module('ngCors', [])
		.config(config);

	config.$inject = ['$httpProvider'];

	function config($httpProvider) {
		$httpProvider.defaults.withCredentials = false;
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
		$httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = '*';
		$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	};

})();