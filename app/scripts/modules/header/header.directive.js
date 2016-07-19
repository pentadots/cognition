var cognition = angular.module("Cognition");

cognition.directive("appHeader", [function() {
    var headerController = function($scope) {

    };

    var headerLink = function(scope, element, attribute) {
    	
    };

    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'views/header/header.html',
        scope:{

        },
        controller: headerController,
        link: headerLink
    };
}]);

