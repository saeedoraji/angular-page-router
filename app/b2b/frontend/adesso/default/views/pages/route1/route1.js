RMI.myconfig = function($runtimeStates){
    $runtimeStates
    .state('/route1', {
        url: "/route1",
        templateUrl: "views/pages/route1/route1.html",
        data: { pageTitle: 'route 1' },
        controller: //'route1Ctrl'
        function( $scope ) {
            $scope.route = "this is route 1";
        }
    });

}
