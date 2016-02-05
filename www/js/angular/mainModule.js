define(["./config/angularConfig", "./control/route", "./directive/menuClose" , "./control/login", "./config/angularRunConfig"],
    function(config, routeCtrl, menuClose, login, runConfig){
    'use strict';

    var module = angular.module('main', ['ngRoute', 'ngCordova', 'ngCordovaOauth']);
    module.config(config);
    module.run(runConfig);

    module.controller('RouteCtrl', routeCtrl);
    module.controller('LoginCtrl', login);

    module.directive('menuClose', menuClose);
});