define([], function() {
  "use strict";
    function LoginCtrl($scope) {
      // This is only for demo purposes
      $scope.user = {
        email: "hello@example.com",
        password: "password123"
      };

      $scope.login = function(user) {

      }
    }


  return LoginCtrl;
});
