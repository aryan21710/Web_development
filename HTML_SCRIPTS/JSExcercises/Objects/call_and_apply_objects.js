
// Call is mostly used in scenarios when a child object has inherited a method from its parent using
// Child.prototype=Object.create(Parent.prototype). Now when the child calls the inherited method, since it has only
// access to the method and not the properties of parent, the method call will print undefined against the 
// properties of parent. To inherit and gain access to properties of parent, child has to use call/apply.

function car(model) {
	this.model=model;
	this.funcName=function() {
		console.log(`"Object method is called"`);
	}
}

function printColor(color,cc) {
	return `"${this.model}" is "${color}" in color and Engine capacity is "${cc}"`;
}

const mycar=new car('xuv500');

// Call is used when a random function wants to access the Properties of an Object in its own
// function call. In this case you call the same function with call extension and pass object whose
// property you wants to access and the function's own argument.
// funcname.call(objnane_which_the_func_wants_access, arguments_of_the_original_func')
console.log('PRINTING INFO USING CALL:-'+printColor.call(mycar,'purple','2100cc'));

// Following code wont work as printColor cant access the object property.
console.log('PRINTING FUNCTION WITHOUT CALL/APPLY:-'+printColor('purple','2100cc'));

// Now Apply is used in same way as call. The only difference being you have to pass an array
// which contains functions argument as second argument along with Object to funcname.apply
var arr=['purple','2100cc'];
console.log('PRINTING INFO USING APPLY:-'+printColor.apply(mycar,arr));

