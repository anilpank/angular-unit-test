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
		
		/**
		 * Expect method defined by the mock $httpBackend service is entirely unrelated to the one 
		 * defined that Jasmine uses to evaluate test results.
		 *  define a request that you expect the component being tested to make.
		 *  The required arguments are the HTTP method and the URL that will be requested
		 */
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
		
		/**
		 * Sending the responses
		 * The mock $httpBackend service won’t send its canned responses until the flush method is called.
		 */
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
	
	/**
	 * Checking That the Expected Requests Were Received. The $httpBackend service expects to receive one HTTP request for each use of the expect method
	 * Check to see that all of my expectations have been met by calling the verifyNoOutstandingExpectation method within a Jasmine it function.
	 * 
	 * The verifyNoOutstandingExpectation method will throw an exception if not all of the expected requests have been received; for this reason, you don’t need to use the Jasmine expect method
	 */	
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