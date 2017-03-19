(function (){
  appSignup = angular.module('starter.signup.controller',[]);

  appSignup.controller ('signup-controller', function ($scope, $state, $ionicPopup, $timeout , $http ){
    $scope.signUp = function (form){
      if(form.$valid){
        var signupPopup = $ionicPopup.show({
         templateUrl: 'home/views/popup-signup-view.html',
         scope: $scope
        });

        var request = {};
        request.method = "POST";
        request.url = "http://127.0.0.1";

        $http(request)
          .then( function(response){
            if (response.success == true){
              signupPopup.close();
              $state.go('home');
            } else {
              signupPopup.close();
              openTryAgainPopup();
            }
          }, function(response){
            signupPopup.close();
            openTryAgainPopup();
          });
        /*
        $timeout(function() {
          //add logic to register
        }, 3000);*/
      }
    };

    function openTryAgainPopup(){
      var signupPopup = $ionicPopup.show({
        templateUrl: 'home/views/popup-try-again-view.html',
        scope: $scope,
        buttons : [
          {
            text:'OK',
            type: 'button-positive'
          }
        ]
      });
    }

  });

})();
