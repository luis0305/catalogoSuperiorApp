var appBooks = {
  controller : function ($scope, Books){
    $scope.books = Books.all();
  },

  detail : function($scope, $state, Books){
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
  }
};
