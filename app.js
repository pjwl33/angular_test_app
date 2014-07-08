(function(){
  var app = angular.module('store', ['store-products', 'gems']);

  $http.get('/products.json', {apiKey: 'myAPIkey'});

  // $http({
  //   method: 'GET',
  //   url: '/products.json'
  // })

  // app.controller('StoreController', function(){
  //   this.products = gems;
  // });

  app.controller('StoreController', [ '$http', '$log', function($http, $log){
    var store = this;
    store.products = [];
    $http.get('/products.json').success(function(data){
      store.products = data;
    });
  } ]);

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();