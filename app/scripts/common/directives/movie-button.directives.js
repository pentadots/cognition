var movie = angular.module("MovieApp");

movie.directive("movieButton", ['MoviesConstant', function(MoviesConstant) {
    var movieButtonController = function($scope) {

    };

    var movieButtonLink = function(scope, element, attribute) {
        scope.url = MoviesConstant.CONFIG.images.base_url + '/' + MoviesConstant.CONFIG.images.poster_sizes[1] + '/' + scope.movie.poster_path;
    };

    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'views/common/movie-button.html',
        scope: {
            movie:"=movieScope"
        },
        controller: movieButtonController,
        link: movieButtonLink
    };
}]);
