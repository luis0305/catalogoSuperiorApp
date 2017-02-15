(function (){
  var appSubcategories = angular.module('starter.controller.subcategories',['starter.service.subcategories']);

  appSubcategories.controller('subcategories-controller', function($scope, Subcategories){
    $scope.subcategories = Subcategories.all();
  });
  appSubcategories.controller('side-menu-subcategories-controller', function($scope, Subcategories){
      $scope.subcategories = Subcategories.getParents();
  });
  appSubcategories.controller('slider-subcategories-controller', function($scope, Subcategories){
    $scope.subcategories = Subcategories.getBySlider(true);
  });
})();
