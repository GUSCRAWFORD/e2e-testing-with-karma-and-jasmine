# e2e-testing-with-karma-and-jasmine
Journals the process of end-to-end unit-testing, javascript and angular components using Karma and Jasmine.

## Overview
Karma runner runs Jasmine tests on your code.  You'll need to use an angular library providing "mock" components of it's framework that inject your services / factories and other angular injectables.




## Required Reading
- http://karma-runner.github.io/
- http://jasmine.github.io/
- https://nodejs.org/

##Step 1 Install Node.js
Visit node website, install Node.js
- Karma executes in Node.js environment

#Step 2 Install Karma
See introduction to installing Karma

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

