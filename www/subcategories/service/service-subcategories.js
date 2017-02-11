(function () {
  var services = angular.module('starter.service.subcategories', []);

  services.factory('Subcategories', function(){
    return {
      all: function(){
        return subcategories;
      },
      getById: function(id){
        return subcategories.filter(function(subcategory){
          return subcategory.id == id;
        })[0];
      },
      getBySlider: function(showSlider){
        return subcategories.filter(function(subcategory){
          return subcategory.showSlider == showSlider;
        });
      }

    }
  });
})();
