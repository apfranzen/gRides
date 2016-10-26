(function() {

  'use strict';

  angular
    .module('myApp.config', ['ui.router'])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('members', {
        url: '/members',
        templateUrl: 'js/components/members/members.view.html',
        controller: 'membersController',
        controllerAs: 'membersCtrl'
      })
  }

})();
