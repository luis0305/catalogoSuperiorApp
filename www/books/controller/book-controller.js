var appBooks = {
  controller : function ($scope, $state, Books){
    var slug = $state.params.slug;
    $scope.books = Books.getBySlug(slug);
  },

  detail : function($scope, $state, Books){
    $scope.id = $state.params.id;
    $scope.book = Books.getById($scope.id);
  }
};
