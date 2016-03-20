(function() {
    'use strict';

    angular.module('translate')
    .config(function ($translateProvider) {
      $translateProvider.useStaticFilesLoader({
          prefix: '/app/components/translate/locale/locale-',
          suffix: '.json'
      });
      $translateProvider.preferredLanguage('pl');
      // Enable escaping of HTML
      $translateProvider.useSanitizeValueStrategy('escape');
    });
})();
