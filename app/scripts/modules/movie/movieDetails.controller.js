var movie = angular.module("MovieApp");

movie.controller('MovieDetailsController', [
    '$scope',
    '$stateParams',
    'MoviesdbService',
    'MoviesConstant',
    function($scope, $stateParams, MoviesdbService, MoviesConstant) {
        var vm = this;
        vm.movieDetails = {};


        vm.init = function(){
            //get Movie Details from MovieList by MovieId
            MoviesdbService.getMovieDetails($stateParams.movieId).then(function(response){
                //console.info("response:",response);
                vm.movieDetails = response.plain();
            }, function(error){
                console.info("error:",error);
            });
        };


        vm.init();
    }
]);