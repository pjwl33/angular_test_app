angular_test_app
================

* <html ng-app="store">
* <body ng-controller="StoreController as store">
* ng-show
* ng-hide
* ng-repeat (for each item in array)
* | take result of first expression then filter through the second expression (i.e. product.price | curreny)
* {{data | filter.options }}
* filter.options:
	* uppercase
	* date:'MM/dd/yyyy @ h:mma'
	* limitTo:#
	* orderBy:'-price'