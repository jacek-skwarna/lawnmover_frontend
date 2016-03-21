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
    vm.turnRight = turnRight;
    vm.turnStop = turnStop;
    vm.moveForward = moveForward;
    vm.moveBack = moveBack;
    vm.counter = 0;

    ///////////
    function turnLeft() {
      turnStop();
      turningInterval = $interval(function() {
        vm.counter -= 1;
      }, 500);
    }

    function turnRight() {
      turnStop();
      turningInterval = $interval(function() {
        vm.counter += 1;
      }, 500);
    }

    function turnStop() {
      $interval.cancel(turningInterval);
    }

    function moveForward() {

    }

    function moveBack() {

    }

  }
})();
