'use strict';
var main = angular.module('main', ['ngAnimate', 'ngRoute']);


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
