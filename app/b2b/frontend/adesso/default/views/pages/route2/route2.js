'use strict'

RMI.myconfig = function($runtimeStates){
    $runtimeStates
    .state('/route2', {
        url: "/route2",
        templateUrl: "views/pages/route2/route2.html",
        data: { pageTitle: 'route 2' },
        controller: //'route1Ctrl'
        function( $scope ) {
            $scope.route = "this is route 2";
        }
    });

}
