define(["./login/facebook", "./login/google"], function(facebook, google) {
  "use strict";
    function LoginCtrl($scope, $rootScope, $cordovaOauth, $http, $route, $location) {
      // This is only for demo purposes

      function getLogin(art){
      var login;
        if(art === "google"){
            login = google;
        }else if(art === "facebook"){
            login = facebook;
        }
        return login;
      }

      $rootScope.defaultUser = {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Squash_pictogram.svg/300px-Squash_pictogram.svg.png"
      };
      $rootScope.user = $rootScope.defaultUser;

      if(localStorage.login){
         $rootScope.login = JSON.parse(localStorage.login);
         var login = getLogin($rootScope.login.art);
         login.addUserDataToScope();
      }else if(true){
         $rootScope.login = {
         access_token: "CAADK3EOJmYoBAJ1baglXZBPyKaKTl1SwvjLnPJovZAtMvJnVg9G0U8jw1A4QrxQK4bZCYT21pS6gdQfhM49SQOlZAmNVwld0Yh9KUux0vxHiiUQapkM6GULV7gAZB0hVJZAUSGuLmTIf88SnkSAKtIBejVOoy9SMGaOnLg0kQ9YlvtXVBmKxI3Uz5HVmFlrkV35DOk6wqBkFOOrNYaPy6xN3WZCjgxsee0ZD",
         art: "facebook"
         }
      }

      $scope.logout = function() {
        if($rootScope.login){
            var login = getLogin($rootscope.login.art);
            login.logout();
        }
      }

      $scope.login = function(art) {
        var login = getLogin(art);
        if($rootScope.login){
          login.addUserDataToScope($cordovaOauth, $http, $rootScope, $route, $location);
        }else{
          login.login($cordovaOauth, $http, $rootScope, $route, $location);
        }
      }

      $scope.isLoginPage = function() {
        return $location.path() ==="/login";
      }
    }

    LoginCtrl.$inject=['$scope', '$rootScope' , '$cordovaOauth', '$http', '$route', '$location'];

    return LoginCtrl;
});
