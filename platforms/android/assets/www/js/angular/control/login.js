define(["./login/facebook"], function(facebook) {
  "use strict";
    function LoginCtrl($scope, $rootScope, $cordovaOauth, $http, $route) {
      // This is only for demo purposes
      $rootScope.user = {
        id: "hello@example.com",
        password: "password123",
        image: "images/user.jpg"
      };
      //$rootScope.login = {
        //access_token: "CAADK3EOJmYoBAI3cDwtsN4qPeJegH1sfsov3hZCIbIDjiAQQmrjTWr0aS7ERj1ZBYlA87rw45JR7LwA7QO0Jdci8VT2gZB8t1zoFct2q45UOW2XwwFNvFdKAce9PDO9UtJO2U52RN5lVW9GNcAqyv41WfHWRj3ZCcAoJrAe2KJo1VQVZBGUZBzce9MQpZBN5ZB3YRvpZBfxREbRqIYL63lppx5joYFkzTXsUZD",
        //expires_in: "6907"
      //};

      $scope.loginGoogle = function() {
        $cordovaOauth.google("lifeleagues", ["email"]).then(function(result) {
        $rootScope.result = JSON.stringify(result);
           console.log("Response Object -> " + JSON.stringify(result));
        }, function(error) {
           console.log("Error -> " + error);
        });
      }

      $scope.loginFacebook = function() {
        if($rootScope.login){
          addFbDataToScope($http, $rootScope);
        }else{
          loginFacebook($cordovaOauth, $http, $rootScope, $route);
        }
      }
    }

    LoginCtrl.$inject=['$scope', '$rootScope' , '$cordovaOauth', '$http', '$route'];

    return LoginCtrl;
});
