
// #KEYWORDS:- [module exports, callback to callback, process.argv]

// BELOW FILE WILL EXECUTE THE ENTIRE CODE OF FILE pl1.js 
// SAME AS nodemon pl1.js
const callMyModule=require('./pl1');
const add=callMyModule.add(4,5);
console.log('ADDITION RESULT:-'+add);
console.log('ACCESSING THE ARGUMENTS PASSED TO THE SCRIPT WHICH IS AS FOLLOWS');
console.log(process.argv[2]+':'+process.argv[3]);
