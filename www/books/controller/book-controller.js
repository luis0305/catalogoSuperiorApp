(function (){

  var booksController = angular.module('starter.controller.books',['starter.service.books', 'starter.service.categories']);

  booksController.controller('book-controller', function ($scope, $state, Books, Categories){
    var slug = $state.params.slug;
    $scope.books = Books.getBySlug(slug);
    $scope.category = Categories.getBySlug(slug);
    $scope.slug = slug;
  });

  booksController.controller('detail-controller', function($scope, $state, Books, Categories){
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
    var slug = $state.params.slug;
    $scope.category = Categories.getBySlug(slug);
  });

  booksController.controller('book-request', function($scope, $state, Books, Categories){
    $scope.user = {};
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
    var slug = $state.params.slug;
    $scope.category = Categories.getBySlug(slug);

    $scope.requestBook = function(form){
      if(form.$valid){
        var href = "mailto:marketinghead@pearson.com?";
        href += "subject=Más información";
        href += "&from=" + $scope.user.email;
        window.open( window.encodeURIComponent(href), '_system');
      }
    };
  });

})();
