({

  clickCreateItem : function(component, event, helper) {
        let validCampingItem = component.find('campingItemForm').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validCampingItem){ 
             // Create the newItem
            let newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));
              
            let theItems = component.get("v.items");
             
            console.log("Antes: " + JSON.stringify(theItems));
            theItems.push(newItem);
            component.set("v.items", theItems);
            console.log("Despues: " + JSON.stringify(theItems));
            
            component.set("v.newItem", {'sobjectType': 'Camping_Item__c',
                        'Name': '',
                        'Quantity__c': 0,
                        'Price__c': 0,
                        'Packed__c': false});
        }               
  }              
  
})
