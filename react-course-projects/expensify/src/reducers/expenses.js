

const defExpenses = [];
export default (state = defExpenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            console.log('ADDING EXPENSE');
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            console.log('REMOVING ONE EXPENSE WITH ID:-' +action.id);
                return state.filter((exp) => exp.id != action.id) 
                
        case 'REMOVE_ALL':
            console.log('REMOVING ALL EXPENSES');
            return {
                state: []
            }

        case 'EDIT_EXPENSE':
            console.log('EDITING THE EXPENSE NOW');
            return state.map((exp) => {
                    if (exp.id == action.id) {
                        return {...exp, ...action.updates}
                    } else {
                        return exp
                    }
                })

        default:
            return state;


    }

}
