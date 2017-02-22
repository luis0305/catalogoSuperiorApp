(function(){
  var app = angular.module('starter', ['ionic', 'starter.controller.books','starter.controller.subcategories']);

  app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

    $ionicConfigProvider.backButton.previousTitleText(false).text('');

    $stateProvider.state('home',{
      url: "/home",
      templateUrl: 'subcategories/views/slider-subcategories.html',
      controller: 'slider-subcategories-controller'
    });

    $stateProvider.state('pearson', {
      url: "/pearson",
      abstract: true,
      templateUrl: 'subcategories/views/side-menu-subcategories.html',
      controller: 'side-menu-subcategories-controller'
    });

    $stateProvider.state('pearson.books', {
      url: '/:slug/books',
      views : {
        'menu-content' : {
          templateUrl: 'books/views/book-view.html',
          controller: 'book-controller'
        }
      }
    });

    $stateProvider.state('pearson.detail', {
      url: '/:slug/books/detail/{id:int}',
      views: {
        'menu-content' : {
          templateUrl: 'books/views/book-detail-view.html',
          controller: 'detail-controller'
        }
      }
    });

    $urlRouterProvider.otherwise('/home');

  });

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
