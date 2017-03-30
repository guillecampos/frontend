var app = angular.module('angula', [
  'ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMaterial'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", { 
      templateUrl: "partials/shop/store.html", 
      controller: "storeController_sound" 
    })
    .when("/shop", { 
      templateUrl: "partials/shop/store.html", 
      controller: "storeController_sound"
    })
    .when('/products/:productCode', { 
      templateUrl: 'partials/shop/product.html', 
      controller: "storeController_sound" 
    })
    .when('/cart', { 
      templateUrl: 'partials/shop/shoppingCart.html', 
      controller: "storeController_sound" 
    })
    .otherwise("/404", {
      templateUrl: "partials/404.html", 
      controller: "PageCtrl"
    });
}]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
app.factory("DataService", function () {

    // create store
    var myStore = new store();
    var storeDetails = new detailsprod();
    // create shopping cart
    var myCart = new shoppingCart("AngularStore");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the 
    // shopping cart with PayPal, you have to create a merchant account with 
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "corsaro22-facilitator@tiscali.it");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart,
        detailsprod: storeDetails
    };
});