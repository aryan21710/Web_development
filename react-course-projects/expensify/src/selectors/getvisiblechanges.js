
export default (expense, filters) => {
    return expense.filter((exp)=>{        
            console.log('FILTERS:-' + JSON.stringify(filters));
            console.log('expense:-' + JSON.stringify(expense))
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
    }).sort((a,b)=>{
        if(filters.sortBy=='date') {
            return a.createdAt > b.createdAt ? -1 : 1
        } else if (filters.sortBy=='amount') {
            return a.amount > b.amount ? -1 : 1
        }

    })
          
}