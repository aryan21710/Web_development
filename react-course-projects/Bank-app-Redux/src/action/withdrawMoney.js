

// export const withdraw10k = (payload) => {
//     console.log('withdraw10k action generator is called:-');
//     return ({
//         type: 'WITHDRAW_10K',
//         payload
        
//     })
// }

// OR 

// SOLUTION 2

export const withdraw10k = () => {
    console.log('withdraw10k action generator is called:-');
    return ({
        type: 'WITHDRAW_10K',
    })
}


export const withdraw5k = () => {
    console.log('withdraw10k action generator is called:-');
    return ({
        type: 'WITHDRAW_5K',
    })
}


