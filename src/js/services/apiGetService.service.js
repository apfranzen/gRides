(function() {
  'use strict';

  angular
    .module('myApp')
    .service('apiGetService', apiGetService);

    apiGetService.$inject = ['$http'];

    function apiGetService($http) {
      this.getMembers = () => {
        return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members?limit=15&offset=20')
        .then(function(response) {
          return (response.data.data);
        });
      }
    }

}());
