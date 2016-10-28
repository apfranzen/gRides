(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['membersService'];

  function membersController(membersService) {
    /*jshint validthis: true */
    // this.members = [];
    this.orderVal = 'username';
    this.filterVal = '';

    this.numLikes = function() {
      this.orderVal = '-_matches.length';
    }

    this.myMatches = function() {
      this.filterVal = '5719234249f05f11000fdd62';
      console.log(this.members);
      this.matches = [];

      for (var i = 0; i < this.members.length; i++) {
        for (var j = 0; j < this.members[i]._matches.length; j++) {
          if (this.members[i]._matches[j] === this.filterVal) {
            this.matches.push(this.members[i])
          }
        }
      }
      this.members = this.matches;
    }

    this.individualmember = function(_id) {
      this.filterVal = '5719234249f05f11000fdd62';
      console.log(this.members);
      this.matches = [];

      for (var i = 0; i < this.members.length; i++) {
        for (var j = 0; j < this.members[i]._matches.length; j++) {
          if (this.members[i]._matches[j] === this.filterVal) {
            this.matches.push(this.members[i])
          }
        }
      }
      this.members = this.matches;
    }

    // this.suffix = '?limit=20&offset=20'
    membersService.getMembers()
    .then((res) => {
      this.members = res;
    });
  }

})();

/*
  1. members.controllers passes string to concat onto end of API string
*/
