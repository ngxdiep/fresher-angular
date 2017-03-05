var app = angular.module('myApp');

app.controller("StoreDetail", function($scope, storeService, $http,
		$routeParams, $window) {

	storeService.getDetail($routeParams.productId).then(success, error);
	function success(data) {
		$scope.product = data;
		console.log(data);
	}
	function error(error) {
		console.log(error);
	}
	
	$scope.onBack = function() {
		$window.history.back();
	}
});