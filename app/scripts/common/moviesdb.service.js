var movie = angular.module("MovieApp");

movie.service("MoviesdbService", [
    'MoviesConstant',
    'RestService',
    function(MoviesConstant, RestService) {

        this.getGenre = function() {
            return RestService.all('genre/movie/list').doGET();
        };

        this.getMovieList = function(id, options) {
            //console.info("moviesdb.service.js : 13 :  options: ",options);
            return RestService.all('genre/' + id).customGET("movies", options);
        };

        this.getMovieDetails = function(id) {
            return RestService.all('/movie/' + id).doGET();
        };

        this.getCompanyDetails = function(id) {
            return RestService.all('/company/' + id).doGET();
        };

        this.getCompanyMovies = function(id) {
            return RestService.all('/company/' + id +'/movies').doGET();
        };

        this.getConfiguration = function() {
            return RestService.all('configuration').doGET();
        };

    }
]);


// movie.factory("MoviesdbFactory",[function(){

//  //Single instance
//  var privateFunction = function(){
//      console.log("MoviesdbFactory.privateFunction");
//  };
//  var MoviesDB = {
//      getGenre: function(){
//          console.log("MoviesdbFactory.getGenre");
//          privateFunction();
//      }
//  };


//  //as a class
//  // var MoviesDB = function(){

//  // };

//  // MoviesDB.prototype.getGenre = function(){

//  // };


//  return MoviesDB;
// }]);
