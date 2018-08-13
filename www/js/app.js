(function(){
  var app = angular.module('starter', ['ionic', 'starter.controller.books','starter.controller.categories',
  'starter.signup.controller']);

  app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider){

    $ionicConfigProvider.backButton.previousTitleText(false).text('');

    $stateProvider.state('home',{
      url: "/home",
      templateUrl: 'categories/views/slider-categories.html',
      controller: 'slider-categories-controller'
    });

    $stateProvider.state('pearson', {
      url: "/pearson",
      abstract: true,
      templateUrl: 'categories/views/side-menu-categories.html',
      controller: 'side-menu-categories-controller'
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

    $stateProvider.state('signup',{
      url: "/:slug/signup",
      templateUrl: 'home/views/signup-view.html',
      controller: 'signup-controller'
    });


    $stateProvider.state('pearson.about', {
      url: '/:slug/about',
      views: {
        'menu-content' : {
          templateUrl: 'home/views/about-us-view.html'
        }
      }
    });

    $stateProvider.state('pearson.help', {
      url: '/:slug/help',
      views: {
        'menu-content' : {
          templateUrl: 'home/views/help.html'
        }
      }
    });

    $stateProvider.state('pearson.request', {
      url: '/:slug/books/detail/{id:int}/request',
      views: {
        'menu-content' : {
          templateUrl: 'books/views/request-book-view.html',
          controller: 'book-request'
        }
      }
    });

    $urlRouterProvider.otherwise('/home');

  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova) {
        cordova.plugins && cordova.plugins.Keyboard && cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        //cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
}());
