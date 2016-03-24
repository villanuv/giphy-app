angular.module('starter.controllers', [])

.controller('UnicornsCtrl', function($scope, $http, UnicornService) {
  $scope.limit = 25;
  $scope.offset = 0;
  $scope.unicorns = [];

  UnicornService.GetUnicorns().then(function(unicorns){
    $scope.unicorns = unicorns;
  });

  $scope.loadMore = function() {
    $scope.offset += $scope.limit;

    UnicornService.GetNewUnicorns({ limit: $scope.limit, offset: $scope.offset }).then(function(unicorns){
      $scope.unicorns = $scope.unicorns.concat(unicorns);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
})

.controller('TrendingCtrl', function($scope, $http, TrendsService) {
  $scope.limit = 25;
  $scope.offset = 0;
  $scope.trends = [];

  TrendsService.GetTrends().then(function(trends){
    $scope.trends = trends;
  });

  $scope.loadMore = function() {
    $scope.offset += $scope.limit;

    TrendsService.GetNewTrends({ limit: $scope.limit, offset: $scope.offset }).then(function(trends){
      $scope.trends = $scope.trends.concat(trends);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
});

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
