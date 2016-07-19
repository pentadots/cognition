var cognition = angular.module("Cognition");

cognition.controller('DashboardController', [
    '$scope',
    '$state',
    function($scope, $state) {
        var vm = this;
        vm.mymarkdown = "#hello, markdown!";
    }
]);