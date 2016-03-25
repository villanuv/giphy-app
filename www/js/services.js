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
  var BASE_URL = "http://api.giphy.com/v1/gifs/search?q=unicorn&api_key=dc6zaTOxFJmzC";
  var unicorns = [];

  return {
    GetUnicorns: function(){
      return $http.get(BASE_URL).then(function(resp){
        unicorns = resp.data.data;
        return unicorns;
      });
    },
    GetNewUnicorns: function({limit: limit, offset: offset}){
      var moreUnicornsUrl = BASE_URL + '&limit=' + limit + '&offset=' + offset;
      return $http.get(moreUnicornsUrl).then(function(resp){
        unicorns = resp.data.data;
        return unicorns;
      });
    }
  }
})

.factory('TrendsService', function($http) {
  var BASE_URL = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
  var trends = [];

  return {
    GetTrends: function(){
      return $http.get(BASE_URL).then(function(resp){
        trends = resp.data.data;
        return trends;
      });
    },
    GetNewTrends: function({limit: limit, offset: offset}){
      var moreTrendsUrl = BASE_URL + '&limit=' + limit + '&offset=' + offset;
      return $http.get(moreTrendsUrl).then(function(resp){
        trends = resp.data.data;
        return trends;
      });
    }
  }
})

.factory('SearchService', function($http) {
  var BASE_URL = "http://api.giphy.com/v1/gifs/search?q=";
  var API_KEY  = "&limit=100&api_key=dc6zaTOxFJmzC" 
  var searches = [];

  return {
    GetSearch: function(string){
      var urlString = BASE_URL + string.replace(/\s+/g, '+') + API_KEY;
      return $http.get(urlString).then(function(resp){
        searches = resp.data.data;
        return searches;
      });
    }   
  };
});
