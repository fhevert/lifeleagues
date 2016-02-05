define([], function() {
  "use strict";
    var login = {
        addUserDataToScope: function($cordovaOauth, $http, $rootScope, $route, $location){
            $location.path("/Home");
            login($cordovaOauth, $http, $rootScope, $route, $location);
        },
        login: function($cordovaOauth, $http, $rootScope, $route){
                $cordovaOauth.google("lifeleagues", ["email", "public_profile"]).then(function(result) {
                    console.log("Response Object -> " + JSON.stringify(result));
                    $rootScope.login = result;
                    $rootScope.login.art = 'facebook';
                    localStorage.login = JSON.stringify($rootScope.login);

                    addUserDataToScope($http, $rootScope);
                 }, function(error) {
                     console.log("Error -> " + error);
                 });

        },
        logout: function($http, $rootScope){
                $rootScope.login = null;
                $rootScope.user = null;
                localStorage.removeItem("login");
        }
    }

    return login;
});
