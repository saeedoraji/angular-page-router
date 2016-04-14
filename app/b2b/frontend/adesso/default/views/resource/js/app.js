
/* RM Innovation App */
var RMI = angular.module("RMI", [ "ui.router","ng-load"

]);




/* Setup App Main Controller */
RMI.controller('AppController', [ '$scope', function( $scope ) {

} ]);


RMI.config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('fly', {
            url: "/{url:(?:route1|route2)}",
            controller: function($scope,$location, load, $state,runtimeStates, env){
                $scope.url = $location.$$url;
                var routejson = {
                    development : {

                    '/route1' : { js :
                        ['views/pages/route1/route1.js','views/pages/route1/route1-2.js'],
                        css :
                        ['views/pages/route1/route1-1.css','views/pages/route1/route1-2.css']
                    },
                    '/route2' : {
                        js :
                        ['views/pages/route2/route2.js','views/pages/route2/route2-2.js'],
                        css:
                        ['views/pages/route2/route2-2.css','views/pages/route2/route2-2.css']
                    }
                },
                production: {
                    '/route1' : {
                        js :
                        ['views/pages/route1/route1.js','views/pages/route1/route1-3.js'],
                        css :
                        ['views/pages/route1/route1-3.css']
                    },
                }
                }
                if (!routejson[env][$scope.url]) {
                    $state.go('error404');
                    return;
                }
                load.loadfiles(routejson[env][$scope.url].css,'link');
                load.loadfiles(routejson[env][$scope.url].js,'script')
                .then( result => {
                    RMI.myconfig(runtimeStates);
                    $state.go($scope.url)
                })
            }
        })
    $urlRouterProvider.otherwise('/404');
} ]);

/* Init global settings and run the app */
RMI.run([ "$rootScope", "$state", "$stateParams","load", "runtimeStates", "$location", function( $rootScope, $state, $stateParams, load, runtimeStates, $location ) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$stateParams = $stateParams;



} ]);


RMI.provider('runtimeStates', function runtimeStates($stateProvider) {

  this.$get = function($q, $timeout, $state) {
    return {
      state: function(name, mystate) {

        $state.get(name) == null && $stateProvider.state(name, mystate);
        return this;
      }
    }
  }
});

RMI.value('env','production')
