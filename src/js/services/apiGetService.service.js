(function() {
  'use strict';

  angular
    .module('myApp')
    .service('apiGetService', apiGetService);

    apiGetService.$inject = ['$http'];

    function apiGetService($http) {
      this.getMembers = () => {
        return $http.get('http://galvanize-student-apis.herokuapp.com/gdating/members')
        .then(function(response) {
          // console.log(response.data.data);
          return (response.data.data);
        });
      }
    }

}());
