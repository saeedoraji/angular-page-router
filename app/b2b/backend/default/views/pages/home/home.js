RMI
    .config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "views/pages/home/home.html",
                data: { pageTitle: 'home' },
                controller: "homeCtrl"
            });

    } ])
    .controller('homeCtrl', function( $rootScope, $scope ) {
        $scope.vendorOwnerId = "567f8ddf7bd3a012d27a802c";
    });