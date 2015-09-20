# e2e-testing-with-karma-and-jasmine
Journals the process of end-to-end testing angular components with karma and jasmine.

## Required Reading
- http://karma-runner.github.io/
- http://jasmine.github.io/
- https://nodejs.org/

#1 Install Node.js
Visit node website, install Node.js
- Karma executes in Node.js environment

#2 Install Karma
See introduction to installing Karma

#3 Jasmine Init
Initialize the Jasmine framework and write a test.
1. Download the Jasmine source
2. Write a test

## Setting up Jasmine
You'll extract jasmine to it's own folder.
- Checkout SpecRunner.html included
  - Modify to point to spec.js files
  - Include your angular layer sources
  - Include angular-mocks.js script

## Writing a spec
```javascript
describe ("your group of tests", function () {
  beforeEach(module("app"));
  it("test", inject(function (injectable) {
    expect(injectable.property).toEqual(value);
  }))
});
```

