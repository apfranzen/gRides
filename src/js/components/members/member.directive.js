(function() {
  'use strict';

  angular
    .module('myApp.components.members')
    .directive('memberView', memberView);

  function memberView() {
    return {
      scope: {
        mem: '<'
      },
      restrict: 'E',
      templateUrl: 'js/components/members/partials/_individualMember.html'
    };
  }

}());
