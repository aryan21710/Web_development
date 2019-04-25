const printHeader = () => {
    return ({
        type: 'HEADER',
        text: '*PRINTED BY REDUX AND NOT BY THIS.STATE*'
    })
}


const information= () => {
    return ({
        type: 'INFORMATION',
        profile: {
            fname: 'ARYAN ',
            lname: 'SHARMA',
            age: 39
        }
    })

}

export {
    printHeader,
    information
}

