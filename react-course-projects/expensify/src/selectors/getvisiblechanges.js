
// #KEYWORDS:- [BELOW expense and filters both are state. Can be accessed using state.expense and state.filters]

export default (expense, filters) => {
    if (filters.sortBy == 'date') {

        expense.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
        return expense;

    } else if (filters.sortBy == 'amount') {
        expense.sort((a, b) => {
            if (a.amount > b.amount) {
                return -1
            } else if (a.amount < b.amount) {
                return 1
            } else {
                return 0
            }
        })
        return expense;

    } else if (filters.text.length > 0 || filters.startDate!=undefined) {
        const newexp = expense.filter((exp) => {
            console.log('FILTERS:-'+JSON.stringify(filters));
            if (filters.startDate!=undefined) {
                 const startDate = typeof (filters.startDate) == 'number' && (filters.startDate > exp.createdAt);
                 if (startDate && (exp.description.toLowerCase().includes(filters.text.toLowerCase()))) {
                     return (startDate && exp);
                 }
            } else {
                if (exp.description.toLowerCase().includes(filters.text.toLowerCase())) {
                    return  exp;

                }
            }
           
        })
        return newexp;

    }


}