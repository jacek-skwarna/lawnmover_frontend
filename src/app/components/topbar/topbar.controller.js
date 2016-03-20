(function() {
  'use strict';

  angular
  .module('topbar')
  .controller('TopbarController', TopbarController);

  /** @ngInject */
  function TopbarController() {
    var vm = this;

    vm.device = {
      id: "JSK201605-A12321433"
    };
  }
})();
