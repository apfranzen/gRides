(function() {
  'use strict';

  angular
    .module('myApp')
    .service('authService', authService);

    authService.$inject = ['$http'];

    function authService($http) {
      let baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating/auth/'
      console.log('authService hit');

      this.login = function(user) {
        console.log('user in auth service: ', user);
        return $http({
          method: 'POST',
          url: baseURL + 'login',
          data: user,
          headers: {'Content-Type': 'application/json'}
        });
      };

      this.register = function(user) {
        return $http({
          method: 'POST',
          url: baseURL + 'register',
          data: user,
          headers: {'Content-Type': 'application/json'}
        });
      };

    }



}());
