angular.module("exampleApp", [])
.controller("defaultCtrl", function ($scope, $http) {
	
	$http.get("productData.json")
	.then(function(response) {
		$scope.products = response.data;
	});
	
	$scope.counter = 0;
	$scope.incrementCounter = function() {
		$scope.counter++;
	};
	
	
});