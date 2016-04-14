RMI
    .config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ) {
        $stateProvider
            .state('about', {
                url: "/about",
                templateUrl: "views/pages/about/about.html",
                data: { pageTitle: 'about' },
                controller: "aboutCtrl"
            });

    } ])
    .controller('aboutCtrl', function( $rootScope, $scope ) {
        $scope.about = "About Page";
    });