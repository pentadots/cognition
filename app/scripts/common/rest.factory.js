var movie = angular.module("MovieApp");

movie.factory("RestService", [
    'MoviesConstant',
    'Restangular',
    function(MoviesConstant, Restangular) {
    	return Restangular.withConfig(function(RestangularConfigurer){
    		RestangularConfigurer.setBaseUrl(MoviesConstant.API_URL);
    		RestangularConfigurer.setRequestSuffix(MoviesConstant.API_KEY);
    	});
    }
]);