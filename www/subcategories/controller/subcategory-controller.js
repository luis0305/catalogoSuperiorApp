(function (){
  var appSubcategories = angular.module('starter.controller.subcategories',['starter.service.subcategories']);

  appSubcategories.controller('subcategories-controller', function($scope, Subcategories){
    $scope.subcategories = Subcategories.all();
  });
  appSubcategories.controller('menu-side-subcategories-controller', function($scope, Subcategories){
      $scope.subcategories = Subcategories.all();
  });
})();
