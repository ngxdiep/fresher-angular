var app = angular.module('myApp');

app.factory('storeService', function($http){
  var getProduct = function() {
	    return $http.get("http://localhost:9000/fresherangular/product/list")
	      .then(function(response) {
	        return response.data;
	      });
  };
  
  var add = function(product) {
	  return $http.post("http://localhost:9000/fresherangular/product/add",
			  product).then(function(response){
					return response.data;
				});
  }
  
  
  var increaseData = function(id){
	  return $http.get('http://localhost:9000/fresherangular/product/increase/'+id)
	  			.then(function(response){
	  				return response.data;
	  			});
  }
  
  
  
  var decreaseData = function(id){
	  return $http.get('http://localhost:9000/fresherangular/product/decrease/'+id)
	  			.then(function(response){
	  				return response.data;
	  			});
  }
  
  var getDetail = function(id) {
	  return $http.get("http://localhost:9000/fresherangular/product/get/" + id)
	  			.then(function(response){
					return response.data;
				});
  }
  
  return {
	  getProduct: getProduct,
	  add: add,
	  increaseData: increaseData,
  	  getDetail: getDetail,
  	  decreaseData:decreaseData,
  }
});

app.directive('listTemplate', function() {
	return {
		templateUrl: '/fresherangular/views/store/templateList.html'
	};
})