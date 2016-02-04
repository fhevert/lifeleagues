define([], function() {
 function RouteCtrl($scope, $location){
         $scope.route = $location.path();
         componentHandler.upgradeDom();
  }

  RouteCtrl.$inject=['$scope','$location'];

  return RouteCtrl;
});




