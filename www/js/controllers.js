angular.module('starter.controllers', [])

.controller('UnicornsCtrl', function($scope, $http) {
  $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn&api_key=dc6zaTOxFJmzC').then(function(resp) {
    $scope.unicorns = resp.data.data;
    console.log('SUCCESS', resp.data.data);
  }, function(err) {
    console.error('ERR', err);
  });
})

.controller('TrendingCtrl', function($scope, $http) {
  $http.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC').then(function(resp) {
    $scope.trends = resp.data.data;
  }, function(err) {
    console.error('ERR', err);
  });

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
});

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
