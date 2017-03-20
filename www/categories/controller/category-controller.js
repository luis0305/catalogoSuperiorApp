(function (){
  var appCategories = angular.module('starter.controller.categories',['starter.service.categories']);

  appCategories.controller('categories-controller', function($scope, Categories){
    $scope.categories = Categories.all();
  });
  appCategories.controller('side-menu-categories-controller', function($scope, Categories, $state){
    $scope.categories = Categories.getParents();
    $scope.slug = $state.params.slug;
  });
  appCategories.controller('slider-categories-controller', function($scope, Categories, $state){
    $scope.categories = Categories.getBySlider(true);
    $scope.slug = $state.params.slug;
  });
})();
