(function(){
  var app = angular.module('starter', ['ionic', 'starter.service']);

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('books', {
      url: '/books',
      templateUrl: 'books/views/book-view.html',
      controller: 'book-controller'
    });
    $stateProvider.state('detail', {
      url: '/books/detail/:id',
      templateUrl: 'books/views/book-detail-view.html'
    });
    $urlRouterProvider.otherwise('/books');
  });

  app.controller('book-controller', appBooks.controller);

  app.controller('detail-controller', appBooks.detail);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
}());
