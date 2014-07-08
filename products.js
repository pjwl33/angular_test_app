(function(){
  var app = angular.module('store-products', []);
  app.directive('productName', function(){
    return {
      // restrict: 'E', //E for element
      // // restrict: 'A' for attribute directives
      // templateUrl: 'product-namel.html',
      // controller: function(){

      // },
      // controllerAs: 'products'
      template: '{{product.name | uppercase}}'
    };
  });

  app.directive('productPrice', function(){
    return {
      template: '{{product.price | currency}}'
    };
  });
})();
