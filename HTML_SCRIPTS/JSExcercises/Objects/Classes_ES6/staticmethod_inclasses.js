class baseClass {
	constructor(radius) {
		this.radius=radius
	}

	draw() {
		console.log(`radius :- ${this.radius}`)
	}

	static parse(str) {
		let obj=JSON.parse(str).radius;
		const basenewObj=new baseClass(obj);
		return basenewObj

	}
}


const baseObj=new baseClass('10cm');
// The following code will call a static method which is not accessible under baseObj. The followind code will
// return a new Obj which will have radius = 40cm and not radius=10cm as above;
// basenewobj-->
// 	baseClass {radius: "40cm"}
// 		radius: "40cm"
// 		__proto__: Object
			// constructor: class baseClass
			// draw: ƒ draw()
			// __proto__: Object
// baseObj-->
// 	baseClass {radius: "10cm"}
// 	radius: "10cm"
// 	__proto__: Object
			// constructor: class baseClass
			// draw: ƒ draw()
			// __proto__: Object
console.log(baseClass.parse('{"circleType":"Semi-Circle", "radius":"40cm"}'));
