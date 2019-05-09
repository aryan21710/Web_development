
import uuid from 'uuid';

export const addExpense = ({amount = 100,description = '',note = '',createdAt = undefined} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        amount,
        description,
        note,
        createdAt
    }
})

export const removeExpense = (id) => {
    console.log('id:-' + id);
    return {
        type: 'REMOVE_EXPENSE',
        id,
    }
}


export const removeAllExpense = () => ({
    type: 'REMOVE_ALL',
})


export const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


