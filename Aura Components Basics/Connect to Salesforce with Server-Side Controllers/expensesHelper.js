({
	createExpense : function(component, expense) {
        let action = component.get("c.saveExpense"); // Salvar con el metodo saveExpense del server controler
        action.setParams({ "expense" : expense });   // Next we attach a data payload to the action. This is new. 
		                                     // We need to send the data for the new expense up to the server. 
		                                     // But look how easy it is! You just use action.setParams() and 
		                                     // provide a JSON-style object with parameter name-parameter value pairs. 
		                                     // The one trick, and it’s important, is that your parameter name must 
		                                     // match the parameter name used in your Apex method declaration.
            
        action.setCallback(this, function(response){ // Next we set the callback for the request. Again, this is what will happen 
	    let state = response.getState();         // when the server returns a response. If you compare this callback function 
            if (state === "SUCCESS") {               // with our original createExpense helper function, it’s virtually identical (minus the disgusting hack).
                let expenses = component.get("v.expenses");
                expenses.push(responsegetReturnValue());
                component.set("v.expenses", expenses);
            }
        });
        $A.enqueueAction(action);
	},
})
