// #KEYWORDS:- [call]

function car(model,color) {

	this.model=model;
	this.color=color;
}

// HERE printFeatures Function FROM mycar object should be made prototype so that other objects
// can inherit that function.
// Once it made prototype its get placed inside the mycar.__proto__ property which is same as
// car.prototype. 

car.prototype.printFeatures=function() {
		console.log(`${this.model} is ${this.color} in color`);

	}
 	//----------------------------------1----------------------------------------------------------

 // In the above code car.prototype which is same as mycar.__proto__has a constructor property which tells
 // the function constructor used to make the object. In google developer tools, if you make an object using
 // function constructor and expand the object, you will see it points to the function constructor. 
 // The function constructor has a property called __proto__ which is nothing but car.prototype in this case.
 // The car.prototype or mycar.__proto__ points constructor which has the function definition of the constructor
 // used to make the Object. 
//  mycar --> ppoints to car which is the func constructor used to make the object.
// 		car {}
// 			c: (...)
// 			m: (...)
// 			get c: ƒ ()
// 			get m: ƒ ()
// 			__proto__:    --> this is car.prototype or mycar.__proto__ points to constructor prop. PARENT IS ROOT OBJ
				// printFeatures: ƒ ()
				// constructor: ƒ car(model,color)  --> this is the construct prop used to fetch the func def
				// arguments: null
				// caller: null
				// length: 2
				// name: "car"
				// prototype: {printFeatures: ƒ, constructor: ƒ}
				// __proto__: ƒ ()
				// [[FunctionLocation]]: how_to_inherit_from_another_object.js:3
				// [[Scopes]]: Scopes[2]
				// __proto__: Object
			// car.prototype.constructor --> func const definition in action
					// ƒ car(model,color) {

	//--------------------------------------------------------------------------------------------

// Initially suv.prototype points to root object (root being parent of xuv500 object (suv))
// here you make car.prototype as parent of suv.prototype and car.prototype has printFeature in it
// so now suv.prototype inherits from car.prototype as shown in above car.prototype.printFeature code.
// so now xuv500 object has access to printFeature method only and not the properties of mycar object.
// this.model and this.color.


 suv.prototype=Object.create(car.prototype);
  	//----------------------------------2----------------------------------------------------------
  	// In  point 1 above if you see the mycar.__proto__ points to its parent which is car constructor
  	// from which the object was derived. But since suv is inherting from function constructor car here
  	// the parent of the func constructor suv is changed to car from root object. See below.
//   	xuv500
		// suv {m: "AUDI Q5", reg: "KA03MQ3740", printRegNo: ƒ}
		//m: "AUDI Q5"
		//printRegNo: ƒ ()reg: "KA03MQ3740"
		//__proto__: car --> PARENT OF suv.prototype is now car instead of ROOT
			// suv.prototype.constructor  --> Since the Parent is changed. Cars function constructor is
			//                            shown here which is misleading. It should point to suv func construct
			// ƒ car(model,color) {


  	//--------------------------------------------------------------------------------------------

  	// So whenever you reset the prototype as a best practice you should also reset the function constructor
  	// which should point it back to itself.

  	suv.prototype.constructor=suv;


   // FOLLOWING CODE DEFINED 2 PRIVATE MEMBERS AND MAKES IT ACCESSIBLE TO OUTSIDE WORLD USING GETTER
   // NOW Object mycar can access m and c variable using mycar.m and pass…


// suv has access to printFeatures coz of Prototypical inheritance and since m which is available
// in suv is coming from mycar object now printFeature in suv can print only this.m and not this.c
function suv(reg,m) {
	this.reg=reg;

	this.printRegNo=function() {
		console.log(`${this.reg} is the REGISTRATION NO OF MY CAR WITH MODEL NO:- ${this.model}`);

	}


	// Now only printFeatur is inherited by xuv500 from mycar. To make this.model and this.color accessible
	// and inheritable from mycar to xuv500. You need to use the call method. call has a syntax of 
	// funcName.call(obj_from_which_funcName_wants_to_inherit, arguments_of_funcName)
	// car arguments are this.model and this.color which wants to access obj suv. And since
	// you are inside suv constructor the object of suv(xuv500) can access suv properties is usinh
	// this keyword. That's why this is passed as an object name.
	// Now xuv500 when call printFeatures for which it already has access will print both the model and color. 
	car.call(this,'KA03MQ3740','xuv500');

}

function sedan() {

}

const mycar=new car('AUDI Q5','RED');
// Above code can be rewritten as "const mycar=new car.prototype.constructor('AUDI Q5','RED');""
const xuv500=new suv('KA03MQ3740','xuv500');
// same as "const xuv500=new suv.prototype.constructor('KA03MQ3740',m1)".


mycar.printFeatures();
xuv500.printRegNo();
xuv500.printFeatures();
