function extend(Child,Parent) {
	Child.prototype=Object.create(Parent.prototype);
	Child.prototype.constructor=Child;
}

function Shape(color) {
	this.color=color;
}

Shape.prototype.printProp=function() {
	console.log(`Printing the Property "${Object.keys(this)}" and Its value is "${this.color}" `)
}

function Circle(type) {
	this.type=type;
	Shape.call(this,'blue Circle');
}

extend(Circle,Shape);

// The printPop is basically a method which is inherited from Shape. Now the same method is over-ridden using Circle
// function constructor. Printpop becomes a Prototype member of cirlce object and not instance member.
Circle.prototype.printProp=function() {
	console.log(`Printing the Property "${Object.keys(this)}" and Its value is "${this.type}" AND "${this.color}" `)
}



// ORDER OF THE FOLLOWING CODE IS IMP. 1] Function constructor 2] extend function where you are changing the 
// parent by creating an object and also setting your constructor back to yourself 3] Call the inherited method
// and over-ride the method.
function Square() {
	Shape.call(this,'red Square')
}

extend(Square,Shape);

Square.prototype.printProp=function() {
	console.log(' I AM METHOD INHERITED FROM SHAPE BUT I HAVE OVER-RIDDEN THE METHOD NOW');
}


const myshape=new Shape('pink Shape');
const circle=new Circle('semi-circle');

const square=new Square();