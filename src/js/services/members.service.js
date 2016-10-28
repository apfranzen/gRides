(function() {
  'use strict';

  angular
    .module('myApp')
    .service('membersService', membersService);

    membersService.$inject = ['$http'];

    function membersService($http) {
      console.log('membersService hit');
      this.getMembers = () => {
        return $http.get(`https://galvanize-student-apis.herokuapp.com/gdating/members`)
        .then(function(response) {
          // console.log(response);
          return (response.data.data);
        });
      }

    }

}());
