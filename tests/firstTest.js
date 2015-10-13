
/**
 * Follow arrange->act->assert path
 * arrange - create a scenario
 * act - perform the test
 * assert - check the result
 *  
 */
describe("First Test", function() {
	//Arrange (setup a scenario)
	var counter;
	
	beforeEach (function () {
		counter = 0;
	});
	
	it ("increments value", function () {
		//Act (attempt the operation)
		counter++;
		//Assert (verfiy the result)
		expect(counter).toEqual(1);
	});
	
	it ("decrements value", function () {
		//Act (attempt the operation)
		counter--;
		//Assert (verify the result)
		expect(counter).toEqual(-1);
	});
});