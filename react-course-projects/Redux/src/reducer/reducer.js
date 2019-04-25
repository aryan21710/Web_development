
export default (state, action) => {
    switch (action.type) {
        case "HEADER":
            return {
                ...state,
                text: action.text
            }
        case "INFORMATION":
            return {
                ...state,
                fname: action.profile.fname,
                lname: action.profile.lname
            }
        default:
            return state;
    }
}