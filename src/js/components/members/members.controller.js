(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['apiGetService'];

  function membersController(apiGetService) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';

    this.click = function() {
      apiGetService.getMembers()
      .then(res => {
        this.members = res;
        // console.log(this.members[0].username);
        console.log(res);
      })

    }
  }

})();
