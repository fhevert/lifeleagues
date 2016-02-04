define(["./login/facebook"], function(facebook) {
  "use strict";
    function LoginCtrl($scope, $rootScope, $cordovaOauth, $http, $route) {
      // This is only for demo purposes
      $rootScope.user = {
        id: "hello@example.com",
        password: "password123",
        image: "images/user.jpg"
      };

      $rootScope.login = {};

      $scope.loginGoogle = function() {
        $cordovaOauth.google("lifeleagues", ["email"]).then(function(result) {
        $rootScope.result = JSON.stringify(result);
           console.log("Response Object -> " + JSON.stringify(result));
        }, function(error) {
           console.log("Error -> " + error);
        });
      }

      $scope.logOut = function() {
        $rootScope.login = {};
        localStorage.access_token = undefined;
      }

      $scope.loginFacebook = function() {
        if($rootScope.login.access_token){
          addFbDataToScope($http, $rootScope);
        }else{
          loginFacebook($cordovaOauth, $http, $rootScope, $route);
        }
      }
    }

    LoginCtrl.$inject=['$scope', '$rootScope' , '$cordovaOauth', '$http', '$route'];

    return LoginCtrl;
});
