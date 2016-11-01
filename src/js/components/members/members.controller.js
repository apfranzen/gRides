(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController)

  membersController.$inject = ['membersService', '$state'];

  function membersController(membersService, $state) {
    /*jshint validthis: true */
    // this.members = [];
    this.show_individual = true;
    this.orderVal = 'username';
    this.filterVal = '';

    this.numLikes = function() {
      this.orderVal = '-_matches.length';
      this.filterVal = '';
    }

    this.myMatches = function() {
      this.filterVal = '5719234249f05f11000fdd62';
      this.orderVal = '';
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

    this.individualMember = function(_id) {
      console.log(this.members);
      this.match = [];
      this.show_individual = true;

      for (var i = 0; i < this.members.length; i++) {
        if (this.members[i]._id === _id) {
          this.match.push(this.members[i])
        }
      }
      this.member = this.match[0];
      this.show_individual = false;
      $state.go('members.conversations')
      console.log('members.conversations');
    }

    // this.suffix = '?limit=20&offset=20'
    membersService.getMembers()
    .then((res) => {
      this.members = res;
      console.log('membersService fired from getMembers');
    });
  }

})();

/*
  1. members.controllers passes string to concat onto end of API string
*/
