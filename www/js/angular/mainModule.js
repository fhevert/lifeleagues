define(["./config/angularConfig", "./control/route", "./directive/menuClose"],
    function(config, routeCtrl, menuClose){
    'use strict';

    var module = angular.module('main', ['ngRoute']);
    module.config(config);
    module.controller('RouteCtrl', routeCtrl);
    module.directive('menuClose', menuClose);
});