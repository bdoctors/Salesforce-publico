##### Test methods are defined using the isTest annotation and have the following syntax:
```
@isTest static void testName() {
    // code_block
}
```
##### Test methods must be defined in test classes, which are classes annotated with isTest. This sample class shows a definition of a test class with one test method.
```
@isTest
private class MyTestClass {
    @isTest static void myTest() {
        // code_block
    }
}
```
To update your code coverage results, use Test | Run All rather than Test | New Run.

It’s still important to test for different inputs to ensure the quality of your code.
