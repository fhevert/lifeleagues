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
});

