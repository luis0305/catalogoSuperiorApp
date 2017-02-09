(function (){

  var booksController = angular.module('starter.controller.books',['starter.service.books']);

  booksController.controller('book-controller', function ($scope, $state, Books){
    var slug = $state.params.slug;
    $scope.books = Books.getBySlug(slug);
  });

  booksController.controller('detail-controller', function($scope, $state, Books){
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
  });

})();
