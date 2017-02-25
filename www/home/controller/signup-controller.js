(function (){
  appSignup = angular.module('starter.signup.controller',[]);

  appSignup.controller ('signup-controller', function ($scope, $state){
    $scope.signUp = function (form){
      if(form.$valid)
        $state.go('home');
    };
  });

})();
