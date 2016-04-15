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
      $rootScope.$on('$viewContentLoaded', function() {
              console.log("Vorher");
              $timeout(function() {
                componentHandler.upgradeAllRegistered();
                console.log("Nachher");
              },1000);
          });
    }
  run.$inject=['$rootScope', '$location', '$timeout'];

  return run;
});


