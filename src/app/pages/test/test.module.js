/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.test', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('test', {
          url: '/test',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'TestPageCtrl',
          title: 'Test',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('test.basic', {
          url: '/basic',
          templateUrl: 'app/pages/test/basic/tables.html',
          title: 'Basic Tables',
          sidebarMeta: {
            order: 0,
          },
        }).state('test.smart', {
          url: '/smart',
          templateUrl: 'app/pages/test/smart/tables.html',
          title: 'Smart Tables',
          sidebarMeta: {
            order: 100,
          },
        });
    $urlRouterProvider.when('/test','/test/basic');
  }

})();
