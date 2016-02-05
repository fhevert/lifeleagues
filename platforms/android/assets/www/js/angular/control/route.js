define([], function() {
 function RouteCtrl($rootScope, $location){
         $rootScope.route = $location.path();
         componentHandler.upgradeDom();
  }

  RouteCtrl.$inject=['$rootScope','$location'];

  return RouteCtrl;
});




