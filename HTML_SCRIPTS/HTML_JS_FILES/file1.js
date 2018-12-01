console.log('1: I AM IN FILE 1');

const t=require('./file2.js');
const _ =require('lodash');

console.log(`UNIQUE ARRAY:-${_.uniq([1,22,1,33,1,44])}`);

console.log(`ADDITION OF 2 AND 3 IS:- ${t.addFunc(2,3)}`);
console.log(t.st);


console.log('2: I AM IN FILE 1');