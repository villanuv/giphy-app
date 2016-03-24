angular.module('starter.services', [])

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
      // console.log(moreUnicornsUrl);
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
      // console.log(moreTrendsUrl);
      return $http.get(moreTrendsUrl).then(function(resp){
        trends = resp.data.data;
        return trends;
      });
    }
  }
});
