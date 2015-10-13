angular.module("exampleApp", [])
.controller("defaultCtrl", function ($scope, $http, $interval, $timeout, $log) {

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
		$log.log ("There are " + response.data.length + " items");
	});

	$scope.counter = 0;
	$scope.incrementCounter = function() {
		$scope.counter++;
	};


});


angular.module("exampleApp")
.filter("labelCase", function ($log) {
	return function (value, reverse) {
		if (angular.isString(value)) {
			$log.info("value:" + value);
			$log.info("reverse:" + reverse);
			var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
			$log.info("intermediate:" + intermediate);
			return (reverse ? intermediate[0].toLowerCase() :
				intermediate[0].toUpperCase()) + intermediate.substr(1);
		} else {
			return value;
		}
	};
});


angular.module("exampleApp")
.directive("unorderedList", function () {
	return function (scope, element, attrs) {
		var data = scope[attrs["unorderedList"]];
		if (angular.isArray(data)) {
			var listElem = angular.element("<ul>");
			element.append(listElem);
			for (var i = 0; i < data.length; i++) {
				listElem.append(angular.element('<li>').text(data[i].name));
			}
		}
	}
});