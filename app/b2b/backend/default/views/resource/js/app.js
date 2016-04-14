
/* RM Innovation App */
var RMI = angular.module("RMI", [ "ui.router"

]);




/* Setup App Main Controller */
RMI.controller('AppController', [ '$scope', function( $scope ) {

} ]);


RMI.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
    $stateProvider
    $urlRouterProvider.otherwise('/404');
} ]);

/* Init global settings and run the app */
RMI.run([ "$rootScope", "$state", "$stateParams", function( $rootScope, $state, $stateParams ) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$stateParams = $stateParams;
} ]);