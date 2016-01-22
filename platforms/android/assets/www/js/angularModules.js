'use strict';
angular.module('main', ['ngAnimate', 'ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/Liga', { templateUrl: 'pages/Liga.html' })
    .when('/Settings', { templateUrl: 'pages/Settings.html' })
    .when('/SpielpartnerFinden', { templateUrl: 'pages/SpielpartnerFinden.html' })
    .otherwise({ redirectTo: '/' });
})
.directive('menuClose', function() {
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
})
.constant('ENDPOINT_URI', 'http://localhost:3000/')
.service('ItemsModel', function ($http, ENDPOINT_URI) {
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
})
.controller('ArticlesCtrl', function($scope, ItemsModel){
    var main = this;

    function getItems() {
      ItemsModel.all()
        .then(function (result) {
          $scope.articles = result.data;
        });
    }
    getItems();
});