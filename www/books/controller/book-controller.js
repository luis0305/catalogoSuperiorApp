(function (){

  var booksController = angular.module('starter.controller.books',['starter.service.books', 'starter.service.subcategories']);

  booksController.controller('book-controller', function ($scope, $state, Books, Subcategories){
    var slug = $state.params.slug;
    $scope.books = Books.getBySlug(slug);
    $scope.subcategory = Subcategories.getBySlug(slug);
  });

  booksController.controller('detail-controller', function($scope, $state, Books, Subcategories){
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
    $scope.subcategory = $scope.book.subcategory;
  });

})();
