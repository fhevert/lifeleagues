function addFbDataToScope($http, $rootScope)
{
    $http.get("https://graph.facebook.com/v2.2/me", {params: {access_token: $rootScope.login.access_token, fields: "name,gender,location,picture", format: "json" }}).then(function(result) {
        var name = result.data.name;
        var gender = result.data.gender;
        var picture = result.data.picture;
        $rootScope.user.image = picture.data.url;
        $rootScope.user.id = name;
    }, function(error) {
        alert("Error: " + error);
    });
}

function loginFacebook($cordovaOauth, $http, $rootScope, $route)
{
    $cordovaOauth.facebook("223047374707082", ["email", "public_profile"],{redirect_uri: "http://localhost/callback"} ).then(function(result) {
        console.log("Response Object -> " + JSON.stringify(result));
        $rootScope.login = result;
        $rootScope.login.art = 'facebook';
        localStorage.login = $rootScope.login;

        addFbDataToScope($http, $rootScope);
     }, function(error) {
         console.log("Error -> " + error);
     });

 }