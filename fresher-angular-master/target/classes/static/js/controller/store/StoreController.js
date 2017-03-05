'use strict';
var app = angular.module('myApp');

app.controller('TodoCtrl', function($scope,storeService, $http) {
	var product = {
		"name" : "",
		"model" : "",
		"year" : "",
		"price" : "",
		"producer" : "",
		"available" : 0
	};

	//get all product
	$scope.getAllProduct = function(data) {
		storeService.getProduct().then(onSuccess, onError);
	};
	var onSuccess = function(data) {
		$scope.products = data;
	};
	var onError = function(reason) {
		$scope.error = "Could not find any data";
	};
	

	// add new product.
	$scope.addProduct  = function() {
		storeService.add($scope.product).then(addSuccess, addError);
		getAllProduct();
	};
	var addSuccess = function(data) {
		alert('add Product Success:' + data);
		$scope.getAllProduct();
	};
	var addError = function(error) {
	};

	//plus available of product
	$scope.increaseData = function(id) {
		storeService.increaseData(id).then(increaseSuccess,increaseError);
	};
	var increaseSuccess = function(data) {
		$scope.getAllProduct();
	};
	var increaseError = function(error) {
	};

	//minus available of product
	$scope.decreaseData = function(id) {
		storeService.decreaseData(id).then(decreaseSuccess,decreaseError);
	};
	var decreaseSuccess = function(data) {
		$scope.getAllProduct();
	};
	var decreaseError = function(error) {
	};
	
	
	
	$scope.showAlert = function() {
		// Appending dialog to document.body to cover sidenav in docs app
		// Modal dialogs should fully cover application
		// to prevent interaction outside of dialog
		$mdDialog.show($mdDialog.alert().parent(
				angular.element(document.querySelector('#popupContainer')))
				.clickOutsideToClose(true).title('This is an alert title')
				.textContent('You can specify some description text in here.')
				.ariaLabel('Alert Dialog Demo').ok('Got it!'));
	};
});
app.directive('myCustomer', function() {
	return {
		restrict : 'E',
		templateUrl : '/fresherangular/views/store/listProduct.html'
	}
});
