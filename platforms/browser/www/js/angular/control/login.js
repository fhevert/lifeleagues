define([], function() {
  "use strict";
    function LoginCtrl($scope, $rootScope, $location, $firebaseAuth) {
      var usersRef = new Firebase("https://popping-fire-5972.firebaseio.com/users");
      var Auth = $firebaseAuth(usersRef);

      $rootScope.getDefaultUser = function(){
        return {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Squash_pictogram.svg/300px-Squash_pictogram.svg.png"
        };
      }

      $rootScope.isAuthenticated = function(){
           var authData = Auth.$getAuth();
           if(authData !== null){
              return true;
           }else{
              return false;
           }
      }


      if(!$rootScope.isAuthenticated()){
            $rootScope.user = $rootScope.getDefaultUser();
      }

      $scope.logout = function() {
        usersRef.unauth();
        $rootScope.user = $rootScope.getDefaultUser();
        $location.path("/Login");
      }

      $scope.login = function(art) {
        Auth.$authWithOAuthRedirect(art).then(function(authData) {
          // User successfully logged in
        }).catch(function(error) {
          if (error.code === "TRANSPORT_UNAVAILABLE") {
            Auth.$authWithOAuthPopup(art).then(function(authData) {
              console.log(authData);
            });
          } else {
            console.log(error);
          }
        });
      };

      Auth.$onAuth(function(authData) {
        if (authData !== null) {
          $location.path("/Home");
          var user = {
             name: authData[authData.provider].displayName,
             image: authData[authData.provider].profileImageURL,
             id: authData.uid
          };

          $rootScope.user = user;
        }
      });

      $scope.isLoginPage = function() {
        return $location.path() ==="/Login";
      }
    }

    LoginCtrl.$inject=['$scope', '$rootScope' , '$location' , '$firebaseAuth'];

    return LoginCtrl;
});
