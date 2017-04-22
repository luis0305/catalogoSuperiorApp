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
      //window.open( window.encodeURIComponent(href), '_system');
      if(form.$valid){
        var href = "mailto:marketinghead@pearson.com?";
        href += "subject=Más información";
        href += "&from=" + $scope.user.email;
        var body = "Nombre:" +$scope.user.name;
        body += "|Teléfono fijo:" + $scope.user.phone;
        body += "|Teléfono celular:" + $scope.user.phone;
        body += "|Universidad:" + $scope.user.university;
        body += "|Materia:" + $scope.user.subject;
        body += "|Matrícula:" + $scope.user.enrollment;
        body += "|Estado:" + $scope.user.state;
        body += "|Matería de intéres:" + $scope.user.bookInterested;
        body += "|Solicitud:" + $scope.user.request;
        href += "&body=" + body;
        var mailto = document.createElement('a');
        mailto.setAttribute('href', window.encodeURIComponent(href));
        mailto.click();
      }

    };
  });

})();
