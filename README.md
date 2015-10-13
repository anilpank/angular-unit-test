# angular-unit-test
We would show how to do unit testing for angular applications


#### Jasmine Functions
- **describe** Groups a number of related tests (this is optional, but it helps organize test code)
- **beforeEach** Executes a function before each test (this is often used for the arrange part of a test)
- **it** Executes a function to form a test (the act part of the test)
- **expect** Identifies the result from the test (part of the assert stage)
- **toEqual** Compares the result from the test to the expected value (the other part of the assert)

#### Jasmine functions for evaluating test results
- **expect(x).toEqual(val)** Asserts that x has the same value as val (but not necessarily the same object)
- **expect(x).toBe(obj)** Asserts that x and obj are the same object
- **expect(x).toMatch(regexp)** Asserts that x matches the specified regular expression
- **expect(x).toBeDefined()** Asserts that x has been defined
- **expect(x).toBeUndefined()** Asserts that x has not been defined
- **expect(x).toBeNull()** Asserts that x is null
- **expect(x).toBeTruthy()** Asserts that x is true or evaluates to true
- **expect(x).toBeFalsy()** Asserts that x is false or evaluates to false
- **expect(x).toContain(y)** Asserts that x is a string that contains y
- **expect(x).toBeGreaterThan(y)** Asserts that x is greater than y


#### Mock Objects Contained in the ngMocks Module
- **angular.mock** Used to create mock modules and resolve dependencies.
- **$exceptionHandler** A mock implementation of the $exceptionHandler service that rethrows the exceptions
it receives.
- **$interval** A mock implementation of the $interval service that allows time to be moved forward to
trigger scheduled functions on demand. See the “Mocking Periods of Time” section.
- **$log** A mock implementation of the $log service that exposes the messages it receives through a
set of properties, one for each of the methods defined by the real service. See the
“Testing Logging” section.
- **$timeout** A mock implementation of the $timeout service that allows the timer to be expired
programmatically so that the associated function executed on demand. See the
“Mocking Periods of Time” section.