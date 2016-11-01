(function() {
  'use strict';

  angular
    .module('myApp.components.members')
    .directive('memberView', memberView);

  function memberView() {
    return {
      scope: {
        member: '<'
      },
      restrict: 'E',
      templateUrl: 'js/components/members/partials/_individualMember.html',
    };
  }

}());
