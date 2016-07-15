var movie = angular.module("MovieApp");

movie.controller('GenreMovieListController', [
    '$scope',
    '$stateParams',
    'MoviesdbService',
    'MoviesConstant',
    function($scope, $stateParams, MoviesdbService, MoviesConstant) {
        var vm = this;
        vm.movieList = [];
        vm.genreId = '';
        vm.movieService = null;

        vm.init = function(){
            //get MovieList by genresId
            vm.genreId = $stateParams.genreId;
            vm.movieService = MoviesdbService.getMovieList;

            /*MoviesdbService.getMovieList($stateParams.genreId).then(function(response){
                //console.info("response:",response);
                vm.movieList = response.plain().results;
            }, function(error){
                console.info("error:",error);
            });*/
        };


        vm.init();
    }
]);