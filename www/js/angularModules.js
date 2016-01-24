'use strict';
var main = angular.module('main', ['ngAnimate', 'ngRoute']);
main.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/Liga', { templateUrl: 'pages/Liga.html', controller: 'RouteCtrl'})
    .when('/Settings', { templateUrl: 'pages/Settings.html', controller: 'RouteCtrl'})
    .when('/SpielpartnerFinden', { templateUrl: 'pages/SpielpartnerFinden.html', controller: 'RouteCtrl'})
    .when('/Anmelden', { templateUrl: 'pages/Anmelden.html', controller: 'RouteCtrl'})
    .otherwise({ redirectTo: '/', controller: 'RouteCtrl'});
}]);
main.directive('menuClose', function() {
    return {
        restrict: 'AC',
        link: function($scope, $element) {
            $element.bind('click', function() {
                var drawer = angular.element(document.querySelector('.mdl-layout__drawer'));
                var obfuscator = angular.element(document.querySelector('.mdl-layout__obfuscator'));

                if(drawer) {
                    drawer.toggleClass('is-visible');
                }
                if(obfuscator){
                    obfuscator.toggleClass('is-visible');
                }
            });
        }
    };
});
main.constant('ENDPOINT_URI', 'http://192.168.1.24:3000/')
main.service('ItemsModel',['$http', 'ENDPOINT_URI',function ($http, ENDPOINT_URI) {
 var service = this,
    path = 'listUsers';

    function getUrl() {
      return ENDPOINT_URI + path;
    }

    function getUrlForId(itemId) {
      return getUrl(path) + itemId;
    }

    service.all = function () {
      return $http.get(getUrl());
    };

    service.fetch = function (itemId) {
      return $http.get(getUrlForId(itemId));
    };

    service.create = function (item) {
      return $http.post(getUrl(), item);
    };

    service.update = function (itemId, item) {
      return $http.put(getUrlForId(itemId), item);
    };

    service.destroy = function (itemId) {
      return $http.delete(getUrlForId(itemId));
    };
}]);
main.controller('ArticlesCtrl',['$scope', 'ItemsModel', function($scope, ItemsModel){
    function getItems() {
      ItemsModel.all()
        .then(function (result) {
          $scope.articles = result.data;
        });
    }
    getItems();
}]);

main.controller('RouteCtrl',['$scope', '$location', function($scope, $location){
    $scope.route = $location.path();
    componentHandler.upgradeDom();
}]);

main.controller('navController', ['$scope', '$location', function($scope, $location){

	$scope.isActive = function(destination){
		return true;
	}
}]);