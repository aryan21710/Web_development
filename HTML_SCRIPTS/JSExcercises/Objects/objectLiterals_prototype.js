//#KEYWORDS:- [Object literals and setting prototype on it. Printing all properties of an object including prototype property and own property, iterating over all the Properties of an Object]
var a= {
    name:'aryan',lname: 'sharma',age: 39,
}
a.__proto__.print=function() {
    console.log(`OUTPUT USING a.__proto__.print ${this.name} ${this.lname} is ${this.age} now`);
}
a.print();

Object.prototype.printInfo=function() {
    console.log(`OUTPUT USING Object.Prototype.printInfo ${this.name} ${this.lname} is ${this.age} now`);
}

a.printInfo();

console.log(a.hasOwnProperty('print'));
console.log(a.hasOwnProperty('printInfo'));

console.log('Object.getOwnPropertyNames(a):-'+Object.getOwnPropertyNames(a));
console.log('Object.getPrototypeOf(a):-'+JSON.stringify(Object.getPrototypeOf(a),null,4));
let allProp = []

for (let i in Object.getPrototypeOf(a)) {
    allProp= allProp.concat(i);
}

allProp = allProp.concat(Object.getOwnPropertyNames(a))
console.log('ALL PROPERTIES OF OBJECT A ARE AS FOLLOWS:-' + allProp);

// IN BELOW CODE ONLY print and printInfo is displayed as part of Object.getPrototypeOf(a) coz
// other properties/attributes are marked ennumerable:false, due to which it wont be listed when
// Object.getPrototypeOf(a) is used to get the value of all properties.

// Object.getPrototypeOf(a)
// { print: ƒ, printInfo: ƒ, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, … }
// print: ƒ()
// printInfo: ƒ()
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

