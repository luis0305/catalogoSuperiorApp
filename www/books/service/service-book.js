(function (){
  var services = angular.module('starter.service.books', []);

  services.factory('Books', function(){
    return {
      all: function(){
        return books;
      },
      getById: function(id){
        return books.filter(function(book){
          return book.Id == id;
        })[0];
      },
      getBySlug: function(slug){
        return books.filter(function(book){
          try{
            return book.Category.Slug == slug;
          } catch (e){
            console.log(book.Id);
          }
        });
      }
    }
  });

})();
