angular.module('starter.services', [])

.directive('ngEnter', function () {
  return function ($scope, $element, $attrs) {
    $element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        $scope.$apply(function (){
          $scope.$eval($attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
})


.factory('UnicornService', function($http){
  var BASE_URL = "http://api.giphy.com/v1/gifs/search?q="
  var API_KEY = "&api_key=dc6zaTOxFJmzC";
  var unicorns = [];

  return {
    GetUnicorns: function(string){
      var searchURL = BASE_URL + string + API_KEY;
      return $http.get(searchURL).then(function(resp){
        unicorns = resp.data.data;
        return unicorns;
      });
    },
    GetNewUnicorns: function({string: string, limit: limit, offset: offset}){
      var moreUnicornsUrl = BASE_URL + string + API_KEY + '&limit=' + limit + '&offset=' + offset;
      return $http.get(moreUnicornsUrl).then(function(resp){
        unicorns = resp.data.data;
        return unicorns;
      });
    }
  }
})

.factory('TrendsService', function($http) {
  var BASE_URL = "http://api.giphy.com/v1/gifs/";
  var API_KEY = "api_key=dc6zaTOxFJmzC"
  var trends = [];

  return {
    GetTrends: function(string){
      if(string == 'trending'){
        string = 'trending?';
      } else {
        string = 'search?q=' + string + '&';
      }
      var trendsURL = BASE_URL + string + API_KEY;
      return $http.get(trendsURL).then(function(resp){
        trends = resp.data.data;
        return trends;
      });
    },
    GetNewTrends: function({string: string, limit: limit, offset: offset}){
      if(string == 'trending'){
        string = 'trending?';
      } else {
        string = 'search?q=' + string + '&';
      }
      var moreTrendsUrl = BASE_URL + string + API_KEY + '&limit=' + limit + '&offset=' + offset;
      return $http.get(moreTrendsUrl).then(function(resp){
        trends = resp.data.data;
        return trends;
      });
    }
  }
});
