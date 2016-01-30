define([],function(){
  function config($routeProvider) {
     $routeProvider
       .when('/Liga', { templateUrl: 'pages/Liga.html', controller: 'RouteCtrl'})
       .when('/Settings', { templateUrl: 'pages/Settings.html', controller: 'RouteCtrl'})
       .when('/AktivitaetSuchen', { templateUrl: 'pages/aktivitaet/AktivitaetSuchen.html', controller: 'RouteCtrl'})
       .when('/AktivitaetErstellen', { templateUrl: 'pages/aktivitaet/AktivitaetErstellen.html', controller: 'RouteCtrl'})
       .when('/Anmelden', { templateUrl: 'pages/Anmelden.html', controller: 'RouteCtrl'})
       .otherwise({redirectTo: '/home'});
  }
  config.$inject=['$routeProvider'];

  return config;
});


