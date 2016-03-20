(function() {
  'use strict';

  angular
  .module('panel')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
    .state('panel', {
      url: '/panel',
      views: {
        '': {
          templateUrl: 'app/panel/panel.html'
        },
        'topbar': {
          templateUrl: 'app/components/topbar/topbar.html',
          controller: 'TopbarController',
          controllerAs: 'topbarCtrl'
        },
        'directionController@panel': {
          templateUrl: 'app/components/directionController/directionController.html',
          controller: 'DirectionController',
          controllerAs: 'directionControllerCtrl'
        },
        'settingsPane@panel': {
          templateUrl: 'app/components/settingsPane/settingsPane.html',
          controller: 'SettingsPaneController',
          controllerAs: 'settingsPaneCtrl'
        }
      },
      abstract: true
    })
    .state('panel.cameras', {
      url: '',
      templateUrl: 'app/components/cameras/cameras.html',
      controller: 'CamerasController',
      controllerAs: 'camerasCtrl'
    });
  }
})();
