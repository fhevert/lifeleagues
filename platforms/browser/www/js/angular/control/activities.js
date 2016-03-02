define([], function() {
  "use strict";

    function ActivitiesCtrl($scope, $firebaseArray) {
       var ref = new Firebase("https://popping-fire-5972.firebaseio.com/activities");
       $scope.activities = $firebaseArray(ref);
       $scope.activity = {};

        $scope.addItem = function() {
            ref.push($scope.activity);
         };
        $scope.removeItem = function(activity) {
            ref.child(activity.$id).remove();
        };
    }


    ActivitiesCtrl.$inject=['$scope', '$firebaseArray'];

    return ActivitiesCtrl;
});
