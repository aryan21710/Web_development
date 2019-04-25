

const defFilterState = {
    text: '',
    sortBy: '',
    startDate: undefined,
    endDate: undefined
}

export default (state = defFilterState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            console.log('TEXT FILTER WILL BE CALLED');
            return {
                ...state,
                text: action.text
            }

        case 'SET_START_DATE':
            console.log('SETTING START DATE FILTER:-' + action.someTime);
            return {
                ...state,
                startDate: action.someTime
            }

        case 'SORT_BY_DATE':
            console.log('SORTING BY DATE NOW');
            return {
                ...state,
                sortBy: action.sortBy
            }

        case 'SORT_BY_AMOUNT':
            console.log('SORTING BY AMOUNT NOW');
            return {
                ...state,
                sortBy: action.sortBy
            }

        default:
            return state

    }

}
