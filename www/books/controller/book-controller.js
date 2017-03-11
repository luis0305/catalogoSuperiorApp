(function (){

  var booksController = angular.module('starter.controller.books',['starter.service.books', 'starter.service.categories']);

  booksController.controller('book-controller', function ($scope, $state, Books, Categories){
    var slug = $state.params.slug;
    $scope.books = Books.getBySlug(slug);
    $scope.category = Categories.getBySlug(slug);
  });

  booksController.controller('detail-controller', function($scope, $state, Books, Categories){
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
    var slug = $state.params.slug;
    $scope.category = Categories.getBySlug(slug);
  });

})();
