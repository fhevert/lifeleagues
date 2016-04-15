define([], function() {
  "use strict";

    function ActivitiesCtrl($scope, $firebaseArray) {
       var ref = new Firebase("https://popping-fire-5972.firebaseio.com/activities");
       $scope.activities = $firebaseArray(ref);

       var types = new Firebase("https://popping-fire-5972.firebaseio.com/availableActivities");
       $scope.types = $firebaseArray(types);

       $scope.filter = {};

       $scope.activity = {};

        $scope.addItem = function() {
            ref.push($scope.activity);
         };
        $scope.removeItem = function(activity) {
            ref.child(activity.$id).remove();
        };
       $scope.update=function(){
          componentHandler.upgradeAllRegistered();

        }
    }


    ActivitiesCtrl.$inject=['$scope', '$firebaseArray'];

    return ActivitiesCtrl;
});
