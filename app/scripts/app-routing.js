//var cognition = angular.module("Cognition");

angular.module("Cognition").config([
    '$stateProvider',
    '$urlRouterProvider',
    // 'routerProvider', 
    function($stateProvider, $urlRouterProvider/*, routerProvider*/) {
        $stateProvider
            .state('dashboard', {
                name: 'dashboard',
                url: '/dashboard',
                controller: 'DashboardController',
                controllerAs: 'DashboardCtrl',
                templateUrl: 'views/dashBoard/dashboard.html'
            });
        $urlRouterProvider.otherwise('/dashboard');
        //routerProvider.setCollectionUrl('assets/configuration.json');
    }
]);
