(function() {

  'use strict';

  angular
    .module('myApp.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['authService', '$state'];

  function authController(authService, $state) {
    /*jshint validthis: true */
    // this.members = [];
    this.authtest = 'auth test';

    this.login = function(user) {
      console.log(user);

      authService.login(user)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
        event.preventDefault();
        $state.go('members');
      })
    }

    this.register = function(newUser) {
      console.log(newUser);
      authService.register(user)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
      })
    }


  }

})();

/*
  1. members.controllers passes string to concat onto end of API string
*/
