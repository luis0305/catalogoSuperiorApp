(function (){
  var services = angular.module('starter.service', []);

  services.factory('Books', function(){
    return {
      all: function(){
        return books;
      },
      getById: function(id){
        return books.filter(function(book){
          return book.id == id;
        })[0];
      }
    }
  });

})();
