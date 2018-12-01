const a=new WeakMap();

// a weakmap will let us access the private variable (a in this case) from oustide
// without any reference to it from outside world or other object.

class Stack {
	constructor() {
	// the value of this object is stored in an array []. 
	// if we want to access the array inside the program
	// we need to do a.get(this). This will be an array variable.Push and other 
	// array operation will be performed as a.get(this).push(item) or
	// a.get(this).pop or a.get(this).length
		a.set(this,[]);
	}

	// the private variable 'a' which is a weakmap can be accessed from outside world 
	// using obj.count property. Here the actual value we need is stored in an array 
	// which is returned by obj.count getter (a.get(this).length);
	get count() {
		if (a.get(this).length > 0) {
			return a.get(this).length;
		} else {
			throw new Error('Stack is Empty');
		}
	}

	push(arr) {
		a.get(this).push(arr);
	}

	pop() {
		if (a.get(this).length > 0) {
			a.get(this).pop();
		} else {
			throw new Error('Stack is Empty');
		}
	}

	peek() {
		if (a.get(this).length > 0) {
			console.log(a.get(this)[a.get(this).length-1]);
		} else {
			throw new Error('Stack is Empty');
		}
	}

}
const s=new Stack(0);



