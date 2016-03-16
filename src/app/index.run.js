(function() {
  'use strict';

  angular
    .module('lawnmoverFrontend')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
