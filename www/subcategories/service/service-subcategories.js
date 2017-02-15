(function () {
  var services = angular.module('starter.service.subcategories', []);

  services.factory('Subcategories', function(){
    return {
      all: function(){
        return subcategories;
      },
      getById: function(id){
        return subcategories.filter(function(subcategory){
          return subcategory.Id == id;
        })[0];
      },
      getBySlider: function(showSlider){
        return subcategories.filter(function(subcategory){
          return subcategory.ShowSlider == showSlider;
        });
      },
      getBySlug: function(slug){
        return subcategories.filter(function(subcategory){
          return subcategory.Slug == slug;
        })[0];
      },
      getParents: function(){
        return subcategories.filter(function(subcategory){
          return subcategory.ParentId == null;
        });
      }
    }
  });
})();
