(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['apiGetService'];

  function membersController(apiGetService) {
    /*jshint validthis: true */
    this.orderVal = '-likes'

    this.numLikes = function() {
      this.orderVal = '-_matches.length';
    }

    this.getMembers = function() {
      apiGetService.getMembers()
      .then(res => {
        this.members = res;
        console.log(res);
      })
    }
    this.getMembers();
  }

})();
