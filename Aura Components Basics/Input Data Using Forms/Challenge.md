# Create a form to enter new items
In this challenge you create a form to enter new items and a list to display the items entered. You also add SLDS styling.

First, to make our camping list look more appealing, change the campingHeader component to use lightning:layout and SLDS. As in the example in the unit, style the Camping List H1 inside the slds-page-header. Add the action:goal SLDS icon using lightning:icon.

Next, modify the campingList component to contain a new item input form and an iteration of campingListItem components for displaying the items entered. Here are additional details for the modifications to the campingList component.

- Add an attribute named **items** with the type of an array of Camping_Item__c custom objects
- Add an attribute named **newItem** of type Camping_Item__c with default Quantity__c and Price__c values of 0
- The component displays the Name, Quantity__c, Price__c, and Packed__c form fields with the appropriate input component types and values from the **newItem** attribute
- The Quantity__c field accepts a number that's at least 1
- Submitting the form executes the action **clickCreateItem** in the JavaScript controller
- If the form is valid, the JavaScript controller pushes the **newItem** onto the array of existing **items**, triggers the notification that the **items** value provider has changed, and resets the **newItem** value provider with a blank sObjectType of Camping_Item__c **(for this challenge, place the code in your component's controller, not the helper)**
