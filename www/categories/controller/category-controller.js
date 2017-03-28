(function (){
  var appCategories = angular.module('starter.controller.categories',['starter.service.categories']);

  appCategories.controller('categories-controller', function($scope, Categories){
    $scope.categories = Categories.all();
  });
  appCategories.controller('side-menu-categories-controller', function($scope, Categories, $state){
    //$scope.categories = Categories.getParents();
    var categories = Categories.getParents();
    $scope.categories = categories.sort(function(selfCategory, category){
      return parseInt(selfCategory.OrderSlider) - parseInt(category.OrderSlider)
    });
    $scope.slug = $state.params.slug;
  });
  appCategories.controller('slider-categories-controller', function($scope, Categories, $state){
    var categories = Categories.getBySlider(true);
    $scope.categories = categories.sort(function(selfCategory, category){
      return parseInt(selfCategory.OrderSlider) - parseInt(category.OrderSlider)
    });
    $scope.slug = $state.params.slug;
  });
})();
