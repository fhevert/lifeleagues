define([], function() {
  "use strict";
    var login = {
        addUserDataToScope: function($cordovaOauth, $http, $rootScope, $route, $location){
            $location.path("/Home");
            console.log(this);
            this.logout($http, $rootScope, $location);
            $location.path("/Login");
        },
        login: function($cordovaOauth, $http, $rootScope, $route, $location){
            $cordovaOauth.google("lifeleagues", ["email", "public_profile"]).then(function(result) {
                console.log("Response Object -> " + JSON.stringify(result));
                $rootScope.login = result;
                $rootScope.login.art = 'facebook';
                localStorage.login = JSON.stringify($rootScope.login);

                login.addUserDataToScope($cordovaOauth, $http, $rootScope, $route, $location);
             }, function(error) {
                 console.log("Error -> " + error);
             });
        },
        logout: function($http, $rootScope, $location){
               $rootScope.login = null;
               $rootScope.user = $rootScope.getDefaultUser();
               localStorage.removeItem("login");
               $location.path("/Login");
        }
    }

    return login;
});
