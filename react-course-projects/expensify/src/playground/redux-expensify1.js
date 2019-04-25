


// ***************************************************************************************




store.subscribe(()=>{
    // IF YOU EVER WANTS TO FIND THE LATEST STATE AFTER ADDITION/DELETION OF EXPENSES OR ADDING/DELETING
    // A FILTER, YOU SHOULD GET THE LATEST STATE BY USING store.getState() inside STORE.SUBSCRIBE.

    const state = store.getState();
    const visibleChanges = getStateChanges(state.expense, state.filters);
    if (visibleChanges!='') {
            console.log('SETTING FILTER ');
            Object.keys(visibleChanges).length > 0 ?
                console.log('FILTERED DATA:-' + JSON.stringify(visibleChanges, null, 4)) :
                console.log('NO FILTERED DATA FOUND');
            console.log(store.getState());
    }

})


// console.log(`exp2 are:- ${JSON.stringify(exp2)}`);

// store.dispatch(removeExpense({id: exp1.expense.id}));


// store.dispatch(removeAllExpense());

// exp1=store.dispatch(addExpense({
//     amount: 20500,
//     description: 'RENT',
//     note: 'APRIL MONTH RENT'
// }));


// store.dispatch(editExpense(exp1.expense.id,{amount: 20000}));
