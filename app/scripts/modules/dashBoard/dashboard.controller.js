var movie = angular.module("MovieApp");

movie.controller('DashboardController', [
    '$scope',
    '$state',
    'MoviesdbService',
    'MoviesConstant',
    function($scope, $state, MoviesdbService, MoviesConstant) {
        $scope.data = "dashboard Data: "+ MoviesConstant.MAX_MOVIE;
        var vm = this;
        vm.configuration = MoviesConstant.CONFIG;
        vm.genres = [];
        vm.getGenre = function() {
            $state.go('genres');
            /*MoviesdbService.getGenre().then(function(response){
            	console.info("response:",response);
            	vm.genres = response.plain().genres;

            }, function(error){
            	console.info("error:",error);
            });*/
            //MoviesdbFactory.getGenre();
            //MoviesdbFactory.privateFunction();
            //MoviesdbService.privateFunction();


        };

        vm.mymarkdown = "#hello, markdown!";
    }
]);

movie.controller('childController', ['$scope', function($scope) {
    $scope.childData = "child Data";
}]);

movie.controller('MovieDetailsController', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.params = $stateParams;
}]);
