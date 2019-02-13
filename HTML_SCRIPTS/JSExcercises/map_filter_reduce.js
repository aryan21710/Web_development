//#KEYWORDS:- [array reduce and array map methods against array forEach]
let a=[{name:'aryan'},{lname: 'sharma'},{age:39},{wife:'sim'},{son:'ryan'}]

let b=[10,20,30,40,50];

const output=a.map((v)=>{
    if (v['name']!=undefined) {
        return v['name']
    } else if (v['lname'] != undefined) {
        return v['lname']
    } else if (v['age'] != undefined) {
        return v['age']
    } else {
        return '';
    }
})

console.log('b:-'+b);
const avg=b.reduce((x,y,index,arr)=>{
    console.log(x + ':' + y)
    x+=y;
    
    if (index==arr.length-1) {
        return x/arr.length;
    } else {
        return x;
    }
})
console.log(avg);

console.log('---------------------------NEXT PROGRAM------------------------');

const addAltNo=b.reduce((x,y,ind,arr)=>{
    if (ind%2==0) {
        console.log(x+':'+y);
        return x+y
    } else {
        return x;
    }
})
console.log('addAltNo:' + addAltNo);

console.log('---------------------------NEXT PROGRAM------------------------');

const retDblNos = b.reduce((total, amount, index, array) => {
    total.push(amount*2);
    return total;
},[]);
console.log('retDblNos:' + retDblNos);

console.log('---------------------------NEXT PROGRAM------------------------');

// WITH REDUCE
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 
'pomegranate', 'berries', 'pineapple', 'fig','banana','orange','apple'];

const tally=fruitBasket.reduce((first,second,ind)=>{
  if(second.match(/a/g)!=null) {
      first[ind]=second; 
  } 
    return first
   
},{})


console.log(tally);

console.log('---------------------------NEXT PROGRAM------------------------');
// WITH FOREACH
let obj={};
fruitBasket.forEach((fruit)=>{
    // console.log('values:-'+Object.values(obj))
    // if (Object.keys(obj).includes(fruit)) {
    //     cnt=obj[fruit];
    //     cnt++;
    //     obj[fruit]=cnt;
    // } else {
    //     cnt=1;
    //     obj[fruit]=cnt;
    // }
    obj[fruit] = Object.keys(obj).includes(fruit) ? obj[fruit]+1 : 1;  
})
console.log(obj);


console.log('---------------------------NEXT PROGRAM------------------------');

// WITH REDUCE
obj={}
 obj=fruitBasket.reduce((frst,scnd)=>{
    frst[scnd] = frst[scnd] == undefined ? 1 : frst[scnd]+1;
    return frst;
},{})

console.log(obj);
// IN THA ABOVE REDUCE CODE, scnd will hold the values of all fruits like banana,
// cherry, orange etc and frst will be an empty {} as defined in the last line
// of obj code "},{}"


console.log('---------------------------NEXT PROGRAM------------------------');

let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let newarr=[];
data.forEach((arr)=>{
    newarr=newarr.concat(arr);
})
console.log('newarr using forEach:-'+newarr);

console.log('---------------------------NEXT PROGRAM------------------------');

newarr=[]
 data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

newarr=data.reduce((arr)=>{
    return newarr.concat(arr);
})


console.log('using using reduce:-' + newarr);

console.log('---------------------------NEXT PROGRAM------------------------');


data = [
    { a: 'happy', b: 'robin', c: ['blue', 'green'] },
    { a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },
    { a: 'sad', b: 'goldfish', c: ['green', 'red'] }
];

let colors=[]
data.forEach((v)=>{
    colors=colors.concat(v.c)
})

console.log('colors are using forEach:-'+colors);
colors=data.reduce((v,w,ind)=>{
    v=v.concat(w['c']);
    return v;
},[])

// IN ABOVE REDUCE CODE, w will iterating over every objects inside data array. and v will
// be an empty array since you have initialized [] inside reduce code at the end"},[]""
// so v will become []. 

console.log('colors are using reduce:-'+colors);

// TO PRINT UNIQUE VALUES IN THE ABOVE EXAMPLE.

colors = data.reduce((v, w, ind) => {
    w['c'].forEach((color)=>{
        !v.includes(color) ? v.push(color) : ""
    })
    return v;
}, [])

console.log('unique colors are using reduce:-' + colors);

console.log('---------------------------NEXT PROGRAM------------------------');

// #KEYWORDS:- [arguments]
// arguments is an array object it doesnt work with es6 function and also
// not all array methods like forEach works with it. Length works with arguments. 

let divList=function() {
    console.log('arguments JS object contains:-'+JSON.stringify(arguments));
}

divList('p','h1','h2','body','input');

