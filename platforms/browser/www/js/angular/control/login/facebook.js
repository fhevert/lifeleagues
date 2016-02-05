define([], function() {
  "use strict";
    var login = {
        addUserDataToScope: function($cordovaOauth, $http, $rootScope, $route, $location){
            $http.get("https://graph.facebook.com/v2.5/me", {params: {access_token: $rootScope.login.access_token, fields: "name,id,picture.type(large)", format: "json" }}).then(function(result) {
                $rootScope.user.image = result.data.picture.data.url;
                $rootScope.user.name = result.data.name;
                $rootScope.user.id = result.data.id;
                $location.path("/Home");
            }, function(error) {
                console.log(this);
                login.logout($http, $rootScope);
            });
        },
        login: function($cordovaOauth, $http, $rootScope, $route, $location){
            $cordovaOauth.facebook("223047374707082", ["email", "public_profile"]).then(function(result) {
                console.log("Response Object -> " + JSON.stringify(result));
                $rootScope.login = result;
                $rootScope.login.art = 'facebook';
                localStorage.login = JSON.stringify($rootScope.login);

                addUserDataToScope($cordovaOauth, $http, $rootScope, $route, $location);
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

