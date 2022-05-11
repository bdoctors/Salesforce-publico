({
    clickCreateItem : function(component, event, helper) {
        let validCampingItem = component.find('campingItemForm').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validCampingItem){ 
         // Do your magic;
        }
        
    }
})
