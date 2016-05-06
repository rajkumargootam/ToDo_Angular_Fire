(function() {
  'use strict';

  angular
    .module('toDoAngularFire')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
