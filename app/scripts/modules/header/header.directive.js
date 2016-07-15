var movie = angular.module("MovieApp");

// movie.controller('otherDirCtrl',['$scope', function($scope){
// 	$scope.name = "other controller";
// }]);
// movie.directive("otherDirective", [function() {
//     return {
//         restrict: 'AE',
//         controller: 'otherDirCtrl',
//         link: function(){

//         }
//     };
// }]);



movie.directive("movieHeader", [function() {
    var movieHeaderController = function($scope) {

    };

    var movieHeaderLink = function(scope, element, attribute) {
    	
    };

    return {
        restrict: 'AE',
        replace: 'true',
        //require: 'otherDirCtrl',
        //template: '<h3>Hello World!!</h3>',
        templateUrl: 'views/header/header.html',
        scope:{

        },
        controller: movieHeaderController,
        link: movieHeaderLink
    };
}]);

