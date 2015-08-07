/**
 * HeaderCtrl controller for page header (i.e. toolbar)
 */

angular.module('ygApp')
    .controller('HeaderCtrl', function ($scope, $mdSidenav, $mdUtil) {
        $scope.toggleNav = $mdUtil.throttle(function () {
            $mdSidenav('left').toggle();
        }, 200);
    });
