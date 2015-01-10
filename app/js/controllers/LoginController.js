'use strict';

app.controller('LoginController',
    function ($scope, $rootScope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(userData,
                function success() {
                    notifyService.showInfo("Successfull loggin.");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Login failed.", err);
                }
            );
        };
    }
);
