define([], function() {
  "use strict";
    function LoginCtrl($scope, $rootScope, $location, $firebaseAuth) {
      var usersRef = new Firebase("https://popping-fire-5972.firebaseio.com/users");
      var Auth = $firebaseAuth(usersRef);


      Auth.$onAuth(function(authData) {
        $rootScope.authData = authData;
      });

      $scope.logout = function() {

      }

      $scope.login = function() {
          Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
            console.log(authData);
          }).catch(function(error) {
            if (error.code === "TRANSPORT_UNAVAILABLE") {
              Auth.$authWithOAuthPopup("facebook").then(function(authData) {
                // User successfully logged in. We can log to the console
                // since we’re using a popup here
                console.log(authData);
              });
            } else {
              // Another error occurred
              console.log(error);
            }
          });
      };

      $scope.isLoginPage = function() {
        return $location.path() ==="/Login";
      }
    }

    LoginCtrl.$inject=['$scope', '$rootScope' , '$location' , '$firebaseAuth'];

    return LoginCtrl;
});
