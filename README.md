# angular-unit-test
We would show how to do unit testing for angular applications

#### Running the unit tests
- Please use the following command for running the unit tests. `karma start karma.config.js`

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


#### Methods defined by Angular.Mock object
- **module(name)** Loads the specified module. See the "Arranging the Test" section.
- **inject(fn)** Resolves dependencies and injects them into a function.
- **dump(object)** Serializes an AngularJS object.

#### Additional Methods and Services for Unit Testing
- **$rootScope.new()** Creates a new scope
- **$controller(name)** Creates an instance of the specified controller
- **$filter(name)** Creates an instance of the specified filter


The mock $httpBackend service provides an API that matches requests made through the $http service to
canned results and to control when those canned results are sent.

#### Methods Defined by the $httpBackend
- **expect(method, url, data, headers)** Defines an expectation for a request that matches the method and URL (with optional data and header matches)
- **flush() flush(count)** Sends back pending results (or the specified number of responses if the optional argument is used)
- **resetExpectations()** Resets the set of expectations
- **verifyNoOutstandingExpectation()**  Checks that all of the expected requests have been received
- **respond(data) response(status, data, headers)** Defines a response for an expected request.

#### Process for using the mock $httpBackend service:
1. Define the requests that you expect to get and the responses for them.
2. Send the responses.
3. Check that all of the expected requests were made.
4. Evaluate the results.


#### Methods defined by the Mock $timeout and $interval services:
- **$timeout->flush(millis)** Advances the timer by the specified number of milliseconds
- **$timeout->verifyNoPendingTasks()** Checks to see whether there are callbacks that have yet to be invoked
- **$interval->flush(millis)** Advances the timer by the specified number of milliseconds 	

The mock $log service keeps track of the log messages it receives and presents them through a logs property that
is added to the real service method names: log.logs, debug.logs, warn.logs, and so on.

#### Methods Defined by the Mock $log Service
- **assertEmpty()** Throws an exception if any logging messages have been written
- **reset()** Clears the stored messages.

#### Examples of various tests
-  [Sample application with controller, directive, filter and service](https://github.com/anilpank/angular-unit-test/blob/master/app/js/app.js)
-  [Simple Jasmine test](https://github.com/anilpank/angular-unit-test/blob/master/tests/firstTest.js)
-  [Testing an Angular Controller](https://github.com/anilpank/angular-unit-test/blob/master/tests/controllerTest.js)
-  [Testing an Angular Directive](https://github.com/anilpank/angular-unit-test/blob/master/tests/directiveTest.js)
-  [Testing an Angular Filter](https://github.com/anilpank/angular-unit-test/blob/master/tests/filterTest.js)
-  [Testing an Angular Service](https://github.com/anilpank/angular-unit-test/blob/master/tests/serviceTest.js)


