angular.module('starter', ['ngRoute'])

    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            //$locationProvider.hashPrefix('!');

            $routeProvider.
            when('/', {
                templateUrl: 'js/home.html',
                controller: 'ConnectCtrl',
            }).
            when('/login', {
                templateUrl: 'js/login.html',
                controller: 'ConnectCtrl',
            }).
            when('/profile/:profileId', {
                templateUrl: 'js/profile.html',
                controller: 'ConnectCtrl',
            }).
            otherwise('/');
        }
    ])

    .run(function ($rootScope, ConnectService) {
        console.log("run started")
    })

    .controller('ConnectCtrl', function ($rootScope, $scope, ConnectService) {
        console.log("controller started")

    })
    .factory('ConnectService', ["$http", function ($http) {
        var ConnectService = {};
        return ConnectService;
    }]);