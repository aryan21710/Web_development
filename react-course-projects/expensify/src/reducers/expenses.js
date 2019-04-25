

const defExpenses = [];
export default (state = defExpenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log('ADDING EXPENSE');
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            console.log('REMOVING ONE EXPENSE:-' + state.length);
            return {
                state: state.filter((exp) => {
                    return exp.id != action.id
                })

            }
        case 'REMOVE_ALL':
            console.log('REMOVING ALL EXPENSES');
            return {
                state: []
            }

        case 'EDIT_EXPENSE':
            console.log('EDITING THE EXPENSE NOW');
            return {
                state: state.map((exp) => {
                    if (exp.id == action.id) {
                        return {
                            ...exp,
                            ...action.newAmt
                        }
                    }


                })

            }

        default:
            return state;


    }

}
