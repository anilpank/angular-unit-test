angular.module("exampleApp", [])
.controller("defaultCtrl", function ($scope, $http, $interval, $timeout) {
	
	$scope.intervalCounter = 0;
	$scope.timerCounter = 0;
	
	$interval (function () {
		$scope.intervalCounter++;
	}, 5000, 10);
	
	$timeout (function () {
		$scope.timerCounter++
	}, 5000);
	
	$http.get("productData.json")
	.then(function(response) {
		$scope.products = response.data;
	});
	
	$scope.counter = 0;
	$scope.incrementCounter = function() {
		$scope.counter++;
	};
	
	
});