# e2e-testing-with-karma-and-jasmine
Journals the process of end-to-end testing with protractor, and unit-testing of javascript and angular components using Karma and Jasmine.

## Overview
Jasmine is a popular and widely used framework for unit testing javascript code.

Karma runner runs Jasmine tests on your code.  You'll need to use an angular library providing "mock" components of it's framework that inject your services / factories and other angular injectables.

1. [Install Node](#step-1-install-node)
2. [Install Karma](#step-2-install-karma)
3. [Using Jasmine](#step-3-using-jasmine)
  - [Setting Up Jasmine](#setting-up-jasmine)
  - [Writing a Spec](#writing-a-spec)

## Recommended Reading
- http://jasmine.github.io/ - The testing framework we're using.
- http://karma-runner.github.io/ - The test-runner
- https://nodejs.org/ - The platform of our test-runner.  Karma creates a mock-webserver serving up our source and test code.
- http://evanhahn.com/how-do-i-jasmine/ - A good step through of using Jasmine framework by itself.  Be sure to consider [angular injections](#writing-a-spec) though.
- https://www.credera.com/blog/technology-insights/open-source-technology-insights/testing-angularjs-part-1-setting-unit-testing-karma/ - A good step-through / explanation of some of Karma's working parts.

##Step 1 Install Node.js
Visit node website, install Node.js
Karma executes in Node.js environment, so you'll need to be setup Node.js platform first.

##Step 2 Install Karma
See introduction to  [installing Karma](http://karma-runner.github.io/0.13/intro/installation.html)

##Step 3 Using Jasmine
Initialize the Jasmine framework and write a test.
1. Download the Jasmine source
2. Write a test

### Setting up Jasmine
You'll extract jasmine to it's own folder.
- Checkout SpecRunner.html included
  - Modify to point to spec.js files
  - Include your angular layer sources
  - Include angular-mocks.js script
We're not really going to make much use of the /SpecRunner.html/ file after this, but it's important to know what we're doing.

The example project has one `user` service with one `identify` method that doesn't do anything in this example except return false.

### Writing a spec
In a general way, you want to follow this pattern.  Notice the `beforeEach(module("app"))` that gets a reference to the owner-module your injectable belongs to?  Notice the `inject(function(injectable))` before testing?  These calls are providing your angular components to the test environment.

```javascript
describe ("your group of tests", function () {  // A suite of tests
  beforeEach(module("app"));                    // Before each test, where "app" is your module
  it("test", inject(function (injectable) {     // Where 'injectable' is your injection
    expect(injectable.property).toEqual(value);
  }))
});
```

