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
      .state('/', {
        url: '/',
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .state('members', {
        url: '/members',
        templateUrl: 'js/components/members/members.view.html',
        controller: 'membersController',
        controllerAs: 'membersCtrl'
      })
      $urlRouterProvider.otherwise('/')
  }

})();
