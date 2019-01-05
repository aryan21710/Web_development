//#KEYWORDS:- [super, extends, class, super, accessing method of parent class  inside the child class ]
class Parent {
	constructor(text,color,bg) {
		this.text=text;
		this.color=color;
		this.bg=bg;
	}
		
	// this is a utility function used in ES6. This is not available for objects.
	// only classes can call it.
	static applyHTMLconfig(div) {
		let body=document.body;
		body.innerHTML+=div;
	}

   // makeDiv is not part of constructor function where all instance members stay in
   // so its available in class.__proto__ which can be easily
   // inherited by any object who is making this object as parent.
	makeDiv() {
		let div=`<div id="bluediv" style="width : 100px; height : 100px; background : ${this.bg};
		color : ${this.color}; margin : 20px; font-size: 20px; padding: 50px">${this.text}</div>`
		Parent.applyHTMLconfig(div);
	}

}

// Inheritance in ES6 classes. This
class Child extends Parent {
	constructor(text,color,bg) {
		// During inheritance, super calls the parent constructor which is mandatory to call in
		// child to initialize the arguments passed.
		super(text,color,bg);
	}

	makeDiv() {
		// If you want to access the Parent method makeDiv here inside the child class then you can do
		// following.
		let makeDivCode=super.makeDiv();
		
		// FOLLOWING CODE WILL OVERWRITE THE INHERITED METHOD MAKEDIV. METHOD-OVERRIDING.
		let p=`<p id="xyz" style="font-size : 20px; color : red; margin : 20px 
		       "> I WILL OVERWRITE THE EXISTING DIV </p>`
		 Child.applyHTMLconfig(p);
	}
}

const pdiv=new Parent('PARENTDIV USING CLASS','red','black');
const cdiv=new Child('ChildDiv USING INHERITANCE CLASS','blue','skyblue');
const div=[pdiv,cdiv];
for (let divs of div) {
	divs.makeDiv();
}
