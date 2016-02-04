function addGoogleDataToScope($http, $rootScope)
{

}

function loginFacebook($cordovaOauth, $http, $rootScope, $route)
{
    $cordovaOauth.google("lifeleagues", ["email", "public_profile"]).then(function(result) {
        console.log("Response Object -> " + JSON.stringify(result));
        $rootScope.login = result;
        $rootScope.login.art = 'facebook';
        localStorage.login = JSON.stringify($rootScope.login);

        addGoogleDataToScope($http, $rootScope);
     }, function(error) {
         console.log("Error -> " + error);
     });

 }