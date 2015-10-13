/**
 * 
 */

describe("Controller Test", function () {
	
	//Arrange 
	//Creating of controller is done here.
	var mockScope = {};
	var controller;
	
	/**
	 * Only the default AngularJS module is loaded by default, which means you have to call the module method for the
	 * modules that you require in your tests, including optional AngularJS modules like ngResource and ngAnimate
	 */
	beforeEach(angular.mock.module("exampleApp"));
	
	/**
	 * create a new scope and pass it to an instance of the controller in the
	 * example application
	 */
	beforeEach(angular.mock.inject(function ($controller, $rootScope) {
		mockScope = $rootScope.$new();
		
		/**
		 * The arguments to the $controller service function are the name of the controller (defaultCtrl in this case) and an object whose
		 * properties will be used to resolve the dependencies declared by the controller’s factory function.
		 * More complex controllers will require other services (which you can obtain through the inject method
		 * 
		 * I assigned the scope object to a variable called mockScope, which I can then use in the act and assert phases of the test.
		 */
		controller = $controller( "defaultCtrl", {
			$scope: mockScope
		});
	}));
	
	//Act and assess
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
	
});