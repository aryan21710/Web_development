const movieName='milk'.split('')
// let test=[]
// movieName.forEach((v)=>{
//     test=movieName.filter((v1,i1)=>[v1===v,i1])
// })

// console.log(test);



for (let i=0; i < movieName.length; i++) {
    for (let j=i+1; j < movieName.length; j++) {
        if (movieName[i]===movieName[j]) {
            console.log('MATCHED:-'+i+'AND'+j)
            break;
        }
    }
}