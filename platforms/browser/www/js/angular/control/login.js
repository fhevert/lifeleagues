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

      $rootScope.getDefaultUser = function(){
        return {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Squash_pictogram.svg/300px-Squash_pictogram.svg.png"
        };
      }

      $rootScope.user = $rootScope.getDefaultUser();

      if(localStorage.login){
         $rootScope.login = JSON.parse(localStorage.login);
         var login = getLogin($rootScope.login.art);
         login.addUserDataToScope($cordovaOauth, $http, $rootScope, $route, $location);
      }else if(true){
         $rootScope.login = {
             access_token: "CAADK3EOJmYoBAGhykS2F9jxqsyxRktFbzR0kVjSeL0aQs4OKloKY5Sn2YOEMoUSMk5PIOwGUqh1k8blYvDVxrVL47KykSIUX74otIes5HZCgKigMGkQTwZBxZAn4eWvwHEsUef4RL9nUq4jhkP20TvmpDXPxnUcmCaHr5VZC6NRkgXUZAaagZBxhabaWezfvoiFX5m0fgf0UfKYWO5ey7ojLesthZC1lFoZD",
             art: "facebook"
         };
         var login = getLogin($rootScope.login.art);
         login.addUserDataToScope($cordovaOauth, $http, $rootScope, $route, $location);
      }

      $scope.logout = function() {
        if($rootScope.login){
            var login = getLogin($rootScope.login.art);
            login.logout($http, $rootScope, $location);
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
        return $location.path() ==="/Login";
      }
    }

    LoginCtrl.$inject=['$scope', '$rootScope' , '$cordovaOauth', '$http', '$route', '$location'];

    return LoginCtrl;
});
