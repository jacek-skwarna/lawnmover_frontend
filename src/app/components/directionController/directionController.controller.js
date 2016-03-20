(function() {
  'use strict';

  angular
  .module('directionController')
  .controller('DirectionController', DirectionController);

  /** @ngInject */
  function DirectionController($log, $interval) {
    var vm = this;
    var turningInterval;

    vm.turnLeft = turnLeft;
    vm.turnStop = turnStop;
    vm.counter = 0;

    ///////////
    function turnLeft() {
      turningInterval = $interval(function() {
        $log.log('left: ' + vm.counter);
        vm.counter -= 1;
      }, 500);
    }

    function turnStop() {
      //$log.log('turnStop');
      alert('turnStop');
      $interval.cancel(turningInterval);
    }


  }
})();
