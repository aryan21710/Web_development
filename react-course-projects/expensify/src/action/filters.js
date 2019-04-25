
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
     

export const setStartDate = (someTime = '') => ({
    type: 'SET_START_DATE',
    someTime
})


export const sortByDate = (sortBy = '') => ({
    type: 'SORT_BY_DATE',
    sortBy
})



export const sortByAmount = (sortBy = '') => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
})