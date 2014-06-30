(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

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

  app.directive('productName', function(){
    return {
      // restrict: 'E', //E for element
      //restrict: 'A' for attribute directives
      template: '{{product.name | uppercase}}'
    };
  });

  app.directive('productPrice', function(){
    return {
      template: '{{product.price | currency}}'
    };
  });

  var gems = [{
    name: "Ruby",
    price: 50,
    description: "Flaming red ruby",
    canPurchase: true,
    soldOut: false,
    shine: 9001,
    images: [
    {
      full: 'http://icons.iconarchive.com/icons/iconshock/real-vista-development/256/ruby-icon.png',
      thumb: 'http://castlevillehax.com/wp-content/uploads/2013/12/RubyMaterial_01_Icon.png'
    }
    ],
    reviews: [
      {
        stars: 5,
        body: "This gem is awesome!",
        author: "pauly0418@gmail.com",
        createdOn: Date.now()
      },
      {
        stars: 1,
        body: "This gem sucks...",
        author: "mister@hater.com",
        createdOn: Date.now()
      },
      {
        stars: 3,
        body: "This gem is okay...I think?",
        author: "indecisive@idontknow.com",
        createdOn: Date.now()
      }
    ]
  },
  {
    name: "Sapphire",
    price: 89.33,
    description: "Ocean blue sapphire",
    canPurchase: true,
    soldOut: false,
    shine: 2005,
    images: [
    {
      full: 'http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Sapphire-icon.png',
      thumb: 'http://www.easterngift.com/pictures/WebSite/SapphireIcon.jpg'
    }
    ],
    reviews: [
      {
        stars: 4,
        body: "This gem is neat!",
        author: "pauly0418@gmail.com",
        createdOn: Date.now()
      },
      {
        stars: 0,
        body: "This gem is horrible...",
        author: "mister@hater.com",
        createdOn: Date.now()
      },
      {
        stars: 2,
        body: "This gem is less okay than the Ruby?",
        author: "indecisive@idontknow.com",
        createdOn: Date.now()
      }
    ]
  }
  ];
})();