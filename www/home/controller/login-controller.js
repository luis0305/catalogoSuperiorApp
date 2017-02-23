(function (){
  appLogin = angular.module('starter.login.controller',[]);

  appLogin.controller ('login-controller', function ($scope, $state){
    $scope.signUp = function (user){
      console.log(user);
      $state.go('home');
    };
  });

})();
