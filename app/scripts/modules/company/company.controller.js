var movie = angular.module("MovieApp");

movie.controller('CompanyDetailsController', [
    '$scope',
    '$stateParams',
    'MoviesdbService',
    'MoviesConstant',
    function($scope, $stateParams, MoviesdbService, MoviesConstant) {
        var vm = this;
        vm.companyDetails, vm.companyMovies = {};


        vm.init = function(){
            //get Movie Details from MovieList by MovieId
            MoviesdbService.getCompanyDetails($stateParams.companyId).then(function(response){
                //console.info("response:",response);
                vm.companyDetails = response.plain();
            }, function(error){
                console.info("error:",error);
            });

            MoviesdbService.getCompanyMovies($stateParams.companyId).then(function(response){
                //console.info("response:",response);
                vm.companyMovies = response.plain().results;
            }, function(error){
                console.info("error:",error);
            });
        };


        vm.init();
    }
]);