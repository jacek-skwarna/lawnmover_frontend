(function() {
  'use strict';

  angular
  .module('cameras')
  .controller('CamerasController', CamerasController);

  /** @ngInject */
  function CamerasController() {
    var vm = this;

    vm.activeCamera = 'FRONT';
  }
})();
