(function() {
  'use strict';

  angular
    .module('nodejs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
