(function (){

  var booksController = angular.module('starter.controller.books',['starter.service.books', 'starter.service.categories']);

  booksController.controller('book-controller', function ($scope, $state, Books, Categories, $window, $cordovaKeyboard){
    var slug = $state.params.slug;
    $scope.books = Books.getBySlug(slug);
    $scope.category = Categories.getBySlug(slug);
    $scope.slug = slug;
    var first_books = Books.getByYear(2018);
    var second_books = Books.getByYear(2017);
    $scope.newBooks = [];
    angular.forEach(first_books, function(book){
      $scope.newBooks.push(book);
    });
    angular.forEach(second_books, function(book){
      $scope.newBooks.push(book);
    });

    $scope.keyPressed = function($event){
      var keyCode = $event.which || $event.keyCode;
      if (keyCode == 13){
        $cordovaKeyboard.close();
      }
    }

  });

  booksController.controller('detail-controller', function($scope, $state, Books, Categories){
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
    var slug = $state.params.slug;
    $scope.category = Categories.getBySlug(slug);
    var attributes = $scope.book.Attributes;
    var hasAttribute = false;
    angular.forEach(attributes, function(attribute, key){
      if (attribute.AttributeName =='Novedad')
        hasAttribute = true;
    });
    $scope.isNewBook = hasAttribute;
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
        href += "subject= Más información";
        href += "&from=" + $scope.user.email;
        var body = "Nombre: " +$scope.user.name;
        body += "%0ATeléfono fijo: " + $scope.user.phone;
        body += "%0ATeléfono celular: " + $scope.user.phone;
        if( !($scope.user.university === undefined) )
          body += "%0AUniversidad : " + $scope.user.university;
        if( !($scope.user.subject === undefined) )
          body += "%0AMateria : " + $scope.user.subject;
        if( !($scope.user.enrollment === undefined) )
          body += "%0AMatrícula :" + $scope.user.enrollment;
        if( !($scope.user.state === undefined) )
          body += "%0AEstado :" + $scope.user.state;
        if( !($scope.user.bookInterested === undefined) )
          body += "%0AMatería de intéres :" + $scope.user.bookInterested;
        if( !($scope.user.request === undefined) )
          body += "%0ASolicitud :" + $scope.user.request;
        href += "&body=" + body;
        $window.open(href, '_system');
      }

    };
  });

})();
