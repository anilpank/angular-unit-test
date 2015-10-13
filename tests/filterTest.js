describe ("Filter tests", function () {
	
	var filterInstance;
	
	beforeEach (angular.mock.module ("exampleApp", function ($provide) {
		$provide.value('$log', console);
	}));
	
	/**
	 * Use the inject method to obtain an instance of the $filter service and use it to obtain an instance of the filter
	 * which is assigned to filterInstance
	 */
	beforeEach (angular.mock.inject(function ($filter) {
		filterInstance = $filter("labelCase");
	}));
	
	it ("Changes case", function () {
		var result = filterInstance("test phrase");
		expect(result).toEqual ("Test phrase");
	});
	
	it ("Reverse case", function () {
		var result = filterInstance ("Test phrase", true);
		expect(result).toEqual ("tEST PHRASE");
	});
	
});