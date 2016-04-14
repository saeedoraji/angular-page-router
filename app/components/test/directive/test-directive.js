RMI
    .directive('testDirective', function() {
        return {
            restrict: 'E', //replace: true,
            scope: {
                title : "@"
            },
            templateUrl: '/app/components/test/directive/views/test.html',
            controller: 'testDirectiveCtrl'
        };
    })

    .controller('testDirectiveCtrl', [ '$scope', function( $scope ) {

    } ]);

