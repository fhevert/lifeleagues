define(["./config/angularConfig", "./control/route", "./directive/menuClose"],
    function(config, routeCtrl, menuclose){
    'use strict';

    var module = angular.module('main', ['ngRoute']);
    module.config(config);
    module.controller('RouteCtrl', routeCtrl);
    module.directive('menuClose', menuclose);
});