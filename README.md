# e2e-testing-with-karma-and-jasmine
Journals the process of end-to-end unit-testing, javascript and angular components using Karma and Jasmine.

## Overview
Jasmine is a popular and widely used framework for unit testing javascript code.

Karma runner runs Jasmine tests on your code.  You'll need to use an angular library providing "mock" components of it's framework that inject your services / factories and other angular injectables.

1. Instll Node

## Required Reading
- http://jasmine.github.io/ - The testing framework we're using.
- http://karma-runner.github.io/ - The test-runner
- https://nodejs.org/ - The platform of our test-runner.  Karma creates a mock-webserver serving up our source and test code.

##Step 1 Install Node.js
Visit node website, install Node.js
Karma executes in Node.js environment, so you'll need to be setup with Node.js

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

### Writing a spec
```javascript
describe ("your group of tests", function () {  // A suite of tests
  beforeEach(module("app"));                    // Before each test, where "app" is your module
  it("test", inject(function (injectable) {     // Where 'injectable' is your injection
    expect(injectable.property).toEqual(value);
  }))
});
```

