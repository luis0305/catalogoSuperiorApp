(function () {
  var services = angular.module('starter.service.categories', []);

  services.factory('Categories', function(){
    return {
      all: function(){
        return categories;
      },
      getById: function(id){
        return categories.filter(function(category){
          return category.Id == id;
        })[0];
      },
      getBySlider: function(showSlider){
        return categories.filter(function(category){
          return category.ShowSlider == showSlider;
        });
      },
      getBySlug: function(slug){
        return categories.filter(function(category){
          return category.Slug == slug;
        })[0];
      },
      getParents: function(){
        return categories.filter(function(category){
          return category.ParentId == null;
        });
      }
    }
  });
})();
