var movie = angular.module("MovieApp");

movie.directive("movieList", ['MoviesConstant', function(MoviesConstant) {
    var movieListController = function($scope) {
        $scope.isPagination = false;
        $scope.pageNo = 0;
        $scope.totalPage = 0;
        $scope.isPrevActive = false;
        $scope.isNextActive = false;

        $scope.serviceCall = function(pageNo) {
            $scope.service($scope.key, { page: pageNo }).then(function(response) {
                //console.info("response:",response);
                $scope.movies = response.plain().results;
                $scope.pageNo = parseInt(response.plain().page);
                $scope.totalPage = parseInt(response.plain().total_pages);
                $scope.isNextActive = $scope.totalPage > 1;
            }, function(error) {
                console.info("error:", error);
            });
        }

        if (!$scope.movies) {
            $scope.isPagination = true;
            $scope.serviceCall(1);
        } else {
            $scope.isPagination = false;
        }


    };

    var movieListLink = function(scope, element, attribute) {
        scope.updateButtons = function updateButtons() {
            scope.isPrevActive = scope.pageNo > 1;
            scope.isNextActive = scope.pageNo < scope.totalPage;
        };

        scope.previousClick = function(ev) {
            if (scope.pageNo > 1) {
                scope.pageNo -= 1;
                scope.serviceCall(scope.pageNo);
                scope.updateButtons();
            }
        }

        scope.nextClick = function(ev) {
            if (scope.pageNo < scope.totalPage) {
                scope.pageNo += 1;
                scope.serviceCall(scope.pageNo);
                scope.updateButtons();
            }
        }
    };

    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'views/common/movie-list.html',
        scope: {
            movies: "=moviesScope",
            service: "=moviesService",
            key: "=searchKey"
        },
        controller: movieListController,
        link: movieListLink
    };
}]);
