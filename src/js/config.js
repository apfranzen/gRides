(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    // .run(routeStart)
    .run(stateStart)

  // function appConfig($stateProvider, $urlRouterProvider) {
  function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'js/components/main/main.view.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl',
        access: true
      })
      .state('members', {
        url: '/members',
        templateUrl: 'js/components/members/members.view.html',
        controller: 'membersController',
        controllerAs: 'membersCtrl',
        access: false
      })
      // .state('members.individualMember', {
      //   templateUrl: 'js/components/members/partials/_individualMember.html',
      //   access: false
      // })
      .state('login', {
        url: '/login',
        templateUrl: 'js/components/auth/login.view.html',
        controller: 'authController',
        controllerAs: 'authCtrl',
        access: true,
      })
      .state('register', {
        url: '/register',
        templateUrl: 'js/components/auth/register.view.html',
        controller: 'authController',
        controllerAs: 'authCtrl',
        access: true
      })
      .state('members.conversations', {
        templateUrl: 'js/components/members/partials/_conversations.html',
        controller: 'conversationsController',
        controllerAs: 'convosCtrl',
        access: false
      })

    $urlRouterProvider.otherwise('/home')

    // function routeStart(){
    //   console.log('test');
    // }

  }

  function stateStart($rootScope, $state, $location, $route, authService) {
    console.log('routeStart hit');
    console.log('location: ', location.hash);
    $rootScope.$on('$stateChangeStart', (event, toState, fromState) => {
      console.log(toState.access);
      if (!toState.access) {
        if (!localStorage.getItem('token')) {
          event.preventDefault();
          $state.go('login');
        }
      }
      // console.log('toState: ', toState);
      // console.log('fromState: ', fromState);
      // console.log(localStorage)
      // if (localStorage.getItem('token') && location.hash === "/login") {
      //   // event.preventDefault()
      //   console.log('yolo');
      //   $state.go('members');
      // } else if (!toState.access && !localStorage.getItem('token')) {
      //   event.preventDefault();
      //   $state.go('login');
      // }
    })
  }


  // function routeStart($rootScope, $location, $route, authService) {
  //   console.log('stateStart');
  //   $rootScope.$on('$locationChangeStart', (event, newUrl, oldUrl) => {
  //
  //     // if (!newUrl.access) {
  //       if (!localStorage.getItem('token')) {
  //         $location.path('/login');
  //       // }
  //     }
  //   });
  // }




})();
