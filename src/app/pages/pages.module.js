/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages', [
	'ui.router',

	'BlurAdmin.pages.dashboard',
	'BlurAdmin.pages.ui',
	'BlurAdmin.pages.test',
	'BlurAdmin.pages.components',
	'BlurAdmin.pages.form',
	'BlurAdmin.pages.tables',
	'BlurAdmin.pages.charts',
	// 'BlurAdmin.pages.maps',
	'BlurAdmin.pages.profile',
    ])
	.config(routeConfig)
	// .config([ '$httpProvider', function($httpProvider) { 
	//     $httpProvider.interceptors.push('httpInterceptor'); 
	// } ])
	// .config([ '$httpProvider', function($httpProvider) { 
	//     $httpProvider.interceptors.push('httpInterceptor'); 
	// } ]) 
	// .factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) { 
	//     var httpInterceptor = { 
	// 	'responseError' : function(response) { 
	// 	    if (response.status == 401) { 
	// 		var rootScope = $injector.get('$rootScope'); 
	// 		var state = $injector.get('$rootScope').$state.current.name; 
	// 		rootScope.stateBeforLogin = state; 
	// 		rootScope.$state.go("login"); 
	// 		return $q.reject(response); 
	// 	    } else if (response.status === 404) { 
	// 		alert("404!"); 
	// 		return $q.reject(response); 
	// 	    } 
	// 	}, 
	// 	'response' : function(response) { 
	// 	    return response; 
	// 	} 
	//     } 
	//     return httpInterceptor; 
	// }]).factory('sessionInjector', ['SessionService', function(SessionService) {
	//     var sessionInjector = {
	// 	request: function(config) {
	// 	    if (!SessionService.isAnonymus) {
	// 		config.headers['x-session-token'] = SessionService.token;
	// 	    }
	// 	    return config;
	// 	}
	//     };
	//     return sessionInjector;
	// }]).config(['$httpProvider', function($httpProvider) {
	//     $httpProvider.interceptors.push('sessionInjector');
	// }]);  
    
    

    /** @ngInject */
    function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
	$urlRouterProvider.otherwise('/dashboard');

	baSidebarServiceProvider.addStaticItem({
	    title: 'Pages',
	    icon: 'ion-document',
	    subMenu: [{
		title: 'Sign In',
		fixedHref: 'auth.html',
		blank: true
	    }, {
		title: 'Sign Up',
		fixedHref: 'reg.html',
		blank: true
	    }, {
		title: 'User Profile',
		stateRef: 'profile'
	    }, {
		title: '404 Page',
		fixedHref: '404.html',
		blank: true
	    }]
	});
	baSidebarServiceProvider.addStaticItem({
	    title: 'Menu Level 1',
	    icon: 'ion-ios-more',
	    subMenu: [{
		title: 'Menu Level 1.1',
		disabled: true
	    }, {
		title: 'Menu Level 1.2',
		subMenu: [{
		    title: 'Menu Level 1.2.1',
		    disabled: true
		}]
	    }]
	});
    }

})();
