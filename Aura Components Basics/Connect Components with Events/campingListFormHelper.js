({
    createItem: function(component, event, helper) {
        let item = component.get("v.item");
        let addItemEvent = component.getEvent("addItem");
        updateEvent.setParams({ "item": item });
        updateEvent.fire();
        component.set("v.newItem", {'sobjectType': 'Camping_Item__c',
                        'Name': '',
                        'Quantity__c': 0,
                        'Price__c': 0,
                        'Packed__c': false});
    }
})
