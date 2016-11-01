(function() {
  'use strict';

  angular
    .module('myApp.components.members')
    .directive('memberView', memberView);

  function memberView() {
    return {
      scope: {
<<<<<<< HEAD
        mem: '<'
      },
      restrict: 'E',
      templateUrl: 'js/components/members/partials/_individualMember.html'
=======
        member: '<'
      },
      restrict: 'E',
      templateUrl: 'js/components/members/partials/_individualMember.html',
>>>>>>> f642bf3495fa1bfe29226d8a0f5a98acf1a9c052
    };
  }

}());
