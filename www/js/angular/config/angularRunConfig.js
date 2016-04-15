define([],function(){
  function run($rootScope, $location, $timeout) {
      $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if (!$rootScope.isAuthenticated()) {
          // no logged user, redirect to /login
          if ( next.templateUrl === "pages/Login.html") {
          } else {
            $location.path("/Login");
          }
        }
      });
    }
  run.$inject=['$rootScope', '$location', '$timeout'];

  return run;
});


