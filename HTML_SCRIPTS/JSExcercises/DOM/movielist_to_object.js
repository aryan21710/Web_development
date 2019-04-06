const fs=require('fs');

fs.readFile('movielist',(err,data)=>{
    err ? console.log('ERROR OCCURED:-'+err) : ''
    if(data) {
        const arr=String(data).split('\n');
        const a=[];
        arr.forEach((x)=>a.push({'title':x}))
        fs.appendFileSync('movieList_obj',JSON.stringify(a,null,4));
   }

})