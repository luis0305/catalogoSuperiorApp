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

  booksController.controller('book-request', function($scope, $state, Books, Categories, $window){
    $scope.user = {};
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
    var slug = $state.params.slug;
    $scope.category = Categories.getBySlug(slug);
    $scope.user.bookInterested = $scope.book.Title;
    $scope.requestBook = function(form){
      //window.open( window.encodeURIComponent(href), '_system');
      if(form.$valid){
        var href = "mailto:marketinghead@pearson.com?";
        href += "subject=Más información";
        href += "&from=" + $scope.user.email;
        var body = "Nombre:" +$scope.user.name;
        body += "|Teléfono fijo:" + $scope.user.phone;
        body += "|Teléfono celular:" + $scope.user.phone;
        if( !($scope.user.university === undefined) )
          body += "|Universidad:" + $scope.user.university;
        if( !($scope.user.subject === undefined) )
          body += "|Materia:" + $scope.user.subject;
        if( !($scope.user.enrollment === undefined) )
          body += "|Matrícula:" + $scope.user.enrollment;
        if( !($scope.user.state === undefined) )
          body += "|Estado:" + $scope.user.state;
        if( !($scope.user.bookInterested === undefined) )
          body += "|Matería de intéres:" + $scope.user.bookInterested;
        if( !($scope.user.request === undefined) )
          body += "|Solicitud:" + $scope.user.request;
        href += "&body=" + body;
        var mailto = document.createElement('a');
        mailto.setAttribute('href', href);
        mailto.click();
        $window.history.back();
      }

    };
  });

})();
