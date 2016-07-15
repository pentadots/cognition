var movie = angular.module("MovieApp");

movie.controller('GenreController', [
    '$scope',
    '$state',
    'MoviesdbService',
    'MoviesConstant',
    function($scope, $state, MoviesdbService, MoviesConstant) {
        var vm = this;
        vm.genres, vm.movieList = [];

        /*vm.getGenre = function() {
            MoviesdbService.getGenre().then(function(response){
            	console.info("response:",response);
            	vm.genres = response.plain().genres;
            }, function(error){
            	console.info("error:",error);
            });

        };*/

        vm.init = function(){
            //get genres
            MoviesdbService.getGenre().then(function(response){
                console.info("response:",response);
                vm.genres = response.plain().genres;
            }, function(error){
                console.info("error:",error);
            });

            //init image path
            vm.imageUrl = MoviesConstant.CONFIG.images.base_url;
            vm.imageSize = MoviesConstant.CONFIG.images.poster_sizes[1];
        };

        vm.onGenreClick = function(id){
            $state.go('genres.movielist', {genreId:id});
        };

        vm.init();
    }
]);