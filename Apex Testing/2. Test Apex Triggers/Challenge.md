# Create a Unit Test for a Simple Apex Trigger
> Note
> A known issue with the Developer Console prevents it from updating code coverage correctly when running a subset of tests. To update your code coverage results, use Test > | Run All rather than Test | New Run.
Create and install a simple Apex trigger which blocks inserts and updates to any contact with a last name of 'INVALIDNAME'. You'll copy the code for the class from GitHub. Then write unit tests that achieve 100% code coverage.
- Create an Apex trigger on the Contact object
  - Name: RestrictContactByName
  - Code: Copy from [GitHub](https://github.com/developerforce/trailhead-code-samples/blob/master/RestrictContactByName.cls)
- Place the unit tests in a separate test class
  - Name: TestRestrictContactByName
  - Goal: 100% test coverage
- Run your test class at least once
