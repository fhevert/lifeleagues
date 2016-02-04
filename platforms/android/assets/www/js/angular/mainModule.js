define(["./config/angularConfig", "./control/route", "./directive/menuClose" , "./control/login"],
    function(config, routeCtrl, menuClose, login){
    'use strict';

    var module = angular.module('main', ['ngRoute', 'ngCordova', 'ngCordovaOauth']);
    module.config(config);

    module.controller('RouteCtrl', routeCtrl);
    module.controller('LoginCtrl', login);

    module.directive('menuClose', menuClose);
});