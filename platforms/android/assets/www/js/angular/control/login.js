define(["./login/facebook"], function(facebook) {
  "use strict";
    function LoginCtrl($scope, $rootScope, $cordovaOauth, $http, $route) {
      // This is only for demo purposes
      $rootScope.user = {
        id: "hello@example.com",
        password: "password123",
        image: "images/user.jpg"
      };
      if(localStorage.login){
         $rootScope.login = JSON.parse(localStorage.login);
      }



      $scope.loginGoogle = function() {
        $cordovaOauth.google("lifeleagues", ["email"]).then(function(result) {
        $rootScope.result = JSON.stringify(result);
           console.log("Response Object -> " + JSON.stringify(result));
        }, function(error) {
           console.log("Error -> " + error);
        });
      }

      $scope.logout = function() {
        $rootScope.login = null;
        localStorage.login = null;
        $scope.$apply()
      }

      $scope.loginFacebook = function() {
        if($rootScope.login){
          addFbDataToScope($http, $rootScope);
        }else{
          loginFacebook($cordovaOauth, $http, $rootScope, $route);
          $scope.$apply()
        }
      }
    }

    LoginCtrl.$inject=['$scope', '$rootScope' , '$cordovaOauth', '$http', '$route'];

    return LoginCtrl;
});
