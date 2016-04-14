'use strict';

RMI
    .config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
        $stateProvider
            .state('error404', {
                url: "/404", controller: "Error404Ctrl", templateUrl: 'views/pages/404/404.html'

            });
    } ])

    .controller('Error404Ctrl', [ '$scope', function( $scope ) {
        $scope.message = "Oops! You're lost.";
    } ]);
