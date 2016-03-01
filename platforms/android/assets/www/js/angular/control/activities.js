define([], function() {
  "use strict";

    function ActivitiesCtrl($scope, $firebaseArray) {
       var ref = new Firebase("https://popping-fire-5972.firebaseio.com/activities");
       $scope.activities = $firebaseArray(ref);

        $scope.addItem = function(name) {
           if (name) {
             $scope.activities.$add({
               "name": name
             });
           }
         };
    }


    ActivitiesCtrl.$inject=['$scope', '$firebaseArray'];

    return ActivitiesCtrl;
});
