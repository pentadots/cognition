var movie = angular.module("MovieApp");

movie.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboard', {
            name: 'dashboard',
            url: '/dashboard',
            controller: 'DashboardController',
            controllerAs: 'DashboardCtrl',
            templateUrl: 'views/dashBoard/dashboard.html',
            resolve: {
                config: ['MoviesdbService', 'MoviesConstant', function(MoviesdbService, MoviesConstant) {
                	return MoviesdbService.getConfiguration().then(function(response){
                		MoviesConstant.CONFIG = response.plain();
                	});
                }]
            }
        })
        .state('genres', {
            name: 'genres',
            url: '/genres',
            controller: 'GenreController',
            controllerAs: 'GenreCtrl',
            templateUrl: 'views/genre/genre.html',
            /*resolve: {
                config: ['MoviesdbService', function(MoviesdbService, MoviesConstant) {
                	return MoviesdbService.getGenre().then(function(response){
                		MoviesConstant.CONFIG = response.plain();
                	});
                }]
            }*/
        })

        .state('genres.movielist', {
            name: 'genres',
            url: '/:genreId',
            controller: 'GenreMovieListController',
            controllerAs: 'GenreMovieListCtrl',
            templateUrl: 'views/genre/genreMovieList.html',
            /*resolve: {
                config: ['MoviesdbService', function(MoviesdbService, MoviesConstant) {
                	return MoviesdbService.getGenre().then(function(response){
                		MoviesConstant.CONFIG = response.plain();
                	});
                }]
            }*/
        })

        .state('companydetails', {
            name: 'companyDetails',
            url: '/company/:companyId',
            controller: 'CompanyDetailsController',
            controllerAs: 'CompanyDetailsCtrl',
            templateUrl: 'views/company/company.html'
        })




        .state('moviedetails', {
            name: 'movieDetails',
            url: '/movies/:movieId',
            controller: 'MovieDetailsController',
            controllerAs: 'MovieDetailsCtrl',
            templateUrl: 'views/movie/movieDetails.html',
            
        })

        .state('dashboard.movielist', {
            name: 'movilelist',
            url: '/movies',
            templateUrl: 'views/dashBoard/movieList.html'
        })
        .state('dashboard.moviedetails', {
            name: 'movile details',
            url: '/movies/:movieId/:prop',
            controller: 'MovieDetailsController',
            templateUrl: 'views/dashBoard/movieDetails.html'
        });
    $urlRouterProvider.otherwise('/dashboard');
}]);
