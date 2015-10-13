/**
 * 
 */

describe("Controller Test", function () {

	//Arrange 
	//Creating of controller is done here.
	var mockScope = {};
	var controller;
	var backend;

	/**
	 * Only the default AngularJS module is loaded by default, which means you have to call the module method for the
	 * modules that you require in your tests, including optional AngularJS modules like ngResource and ngAnimate
	 */
	beforeEach(angular.mock.module("exampleApp"));

	/**
	 * mock $httpBackend service provides an API that matches requests made through the $http service to 
	 * canned results and to control when those canned results are sent
	 */
	beforeEach(angular.mock.inject(function ($httpBackend) {
		backend = $httpBackend;
		backend.expect("GET", "productData.json").respond(
				[
				 { "name": "Apples", "category": "Fruit", "price": 1.20 },
				 { "name": "Bananas", "category": "Fruit", "price": 2.42 },
				 { "name": "Pears", "category": "Fruit", "price": 2.02 }]
		);

	}));

	/**
	 * create a new scope and pass it to an instance of the controller in the
	 * example application
	 */
	beforeEach(angular.mock.inject(function ($controller, $rootScope, $http) {
		mockScope = $rootScope.$new();

		/**
		 * The arguments to the $controller service function are the name of the controller (defaultCtrl in this case) and an object whose
		 * properties will be used to resolve the dependencies declared by the controller’s factory function.
		 * More complex controllers will require other services (which you can obtain through the inject method
		 * 
		 * I assigned the scope object to a variable called mockScope, which I can then use in the act and assert phases of the test.
		 */
		controller = $controller( "defaultCtrl", {
			$scope: mockScope,
			$http: $http
		});
		
		backend.flush();
	}));

//	Act and assess
	it("Creates variable", function () {
		expect(mockScope.counter).toEqual(0);
	});

	/**
	 * See if calling the incrementCounter function correctly changes the value
	 */
	it("Increments counter", function () {
		mockScope.incrementCounter();
		expect(mockScope.counter).toEqual(1);
	});
	
	it ("makes an ajax request", function () {
		backend.verifyNoOutstandingExpectation();		
	});
	
	it ("Processes the data", function () {
		expect (mockScope.products).toBeDefined();
		expect (mockScope.products.length).toEqual(3);
	});
	
	it ("Preserves the data order", function () {
		expect(mockScope.products[0].name).toEqual("Apples");
		expect(mockScope.products[1].name).toEqual("Bananas");
		expect(mockScope.products[2].name).toEqual("Pears");
	});

});