(function (){
  appSignup = angular.module('starter.signup.controller',[]);

  appSignup.controller ('signup-controller', function ($scope, $state, $ionicPopup, $timeout ){
    $scope.signUp = function (form){
      if(form.$valid){
        var signupPopup = $ionicPopup.show({
         templateUrl: 'home/views/popup-signup-view.html',
         scope: $scope
        });
        /*
        $timeout(function() {
          //add logic to register
          signupPopup.close();
          $state.go('home');
        }, 3000);*/
      }
    };
  });

})();
