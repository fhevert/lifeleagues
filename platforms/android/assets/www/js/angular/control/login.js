define([], function() {
  "use strict";
    function LoginCtrl($scope, $cookies, $http, $q, $timeout) {
      // This is only for demo purposes
      $scope.user = {
        email: "hello@example.com",
        password: "password123"
      };


      $scope.login = function(user) {
        $http.get("http://localhost:3000/login", user)
        .then(
          function(response) { // success
            token = response.data.token;
            var userId = response.data.userId;
            return $http.get("/users/" + userId); // return another promise to chain `then`
          }, function(response) { // error
            $scope.error = response.data.err;
            // return 'empty' promise so the right `then` function is called
            return $q.reject("Login failed");
          }
        )
        .then(
          function(response) {
            $scope.user = response.data;
          },
          function(response) {
            console.log(response);
          }
        );
      };
    }

   LoginCtrl.$inject=['$scope', '$cookies', '$http', '$q', '$timeout'];

  return LoginCtrl;
});
