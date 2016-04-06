angular.module('starter.controllers', [])

.controller('UnicornsCtrl', function($scope, $ionicNavBarDelegate, $ionicModal, $timeout, UnicornService) {
  $scope.limit = 25;
  $scope.offset = 0;
  $scope.unicorns = [];
  $scope.searchbarData = {terms: 'unicorn'};

  console.log($ionicNavBarDelegate.title);

  $scope.update = function(string) {
    var stringFix = string.terms.replace(/\s+/g, '+');
    $scope.searchbarData = angular.copy({terms: stringFix});
    $scope.searchbar = '';
    $scope.unicorns.length = 0;
    UnicornService.GetUnicorns($scope.searchbarData.terms).then(function(unicorns){
      $scope.unicorns = unicorns;
    });
    $ionicNavBarDelegate.title('Search: ' + string.terms);
  };

  UnicornService.GetUnicorns($scope.searchbarData.terms).then(function(unicorns){
    $scope.unicorns = unicorns;
  });

  $scope.loadMore = function() {
    $scope.offset += $scope.limit;

    UnicornService.GetNewUnicorns({ string: $scope.searchbarData.terms, limit: $scope.limit, offset: $scope.offset }).then(function(unicorns){
      $scope.unicorns = $scope.unicorns.concat(unicorns);
      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$apply();
    });
  };

  $ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
    $scope.modal = $ionicModal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.openModal = function(image) {
    $scope.modalImg = image;
    $timeout(function() {
      $scope.modal.show();
    }, 700);
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $timeout(function() {
      $scope.modalImg = "/img/spinner.gif";
    }, 2000);
  };

})

.controller('TrendingCtrl', function($scope, $ionicNavBarDelegate, $ionicModal, $timeout, TrendsService) {
  $scope.limit = 25;
  $scope.offset = 0;
  $scope.trends = [];
  $scope.searchbarData = {terms: 'trending'};

  $scope.update = function(string) {
    var stringFix = string.terms.replace(/\s+/g, '+');
    $scope.searchbarData = angular.copy({terms: stringFix});
    $scope.searchbar = '';
    $scope.trends.length = 0;
    TrendsService.GetTrends($scope.searchbarData.terms).then(function(trends){
      $scope.trends = trends;
    });
    $ionicNavBarDelegate.title('Search: ' + string.terms);
  };

  TrendsService.GetTrends($scope.searchbarData.terms).then(function(trends){
    $scope.trends = trends;
  });

  $scope.loadMore = function() {
    $scope.offset += $scope.limit;

    TrendsService.GetNewTrends({ string: $scope.searchbarData.terms, limit: $scope.limit, offset: $scope.offset }).then(function(trends){
      $scope.trends = $scope.trends.concat(trends);
      $scope.$broadcast('scroll.infiniteScrollComplete');
      $scope.$apply();
    });
  };

  $ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
    $scope.modal = $ionicModal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.openModal = function(image) {
    $scope.modalImg = image;
    $timeout(function() {
      $scope.modal.show();
    }, 700);
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $timeout(function() {
      $scope.modalImg = "/img/spinner.gif";
    }, 2000);
  };

});
