define(["./config/angularConfig", "./control/route", "./directive/menuClose" , "./control/login", "./config/angularRunConfig", "./control/activities"],
    function(config, routeCtrl, menuClose, login, runConfig, activities){
    'use strict';

    var module = angular.module('main', ['ngRoute', 'ngCordova', 'ngCordovaOauth', 'firebase']);
    module.config(config);
    module.run(runConfig);

    module.controller('RouteCtrl', routeCtrl);
    module.controller('LoginCtrl', login);
    module.controller('ActivitiesCtrl', activities);

    module.directive('menuClose', menuClose);
});