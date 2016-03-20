(function() {
  'use strict';

  angular
    .module('lawnmoverFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('start', {
        url: '/',
        templateUrl: 'app/start/start.html',
        controller: 'StartController',
        controllerAs: 'startCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
