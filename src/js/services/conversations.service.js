(function() {
  'use strict';

  angular
    .module('myApp')
    .service('conservationsService', conservationsService);

    conservationsService.$inject = ['$http'];

    function conservationsService($http) {
      console.log('conservationsService hit');
      this.getConversations = () => {
        return $http.get(`https://galvanize-student-apis.herokuapp.com/gdating/members/5719234249f05f11000fdd62/conversations/5719234249f05f11000fdb80`)

        .then(function(response) {
          return (response.data.data);
        });
      }
    }

}());
