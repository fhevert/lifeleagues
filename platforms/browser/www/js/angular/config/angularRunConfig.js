define([],function(){
  function run($rootScope, $location) {
      $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if ($rootScope.login == null) {
          // no logged user, redirect to /login
          if ( next.templateUrl === "pages/Login.html") {
          } else {
            $location.path("/Login");
          }
        }
      });
    }
  run.$inject=['$rootScope', '$location'];

  return run;
});


