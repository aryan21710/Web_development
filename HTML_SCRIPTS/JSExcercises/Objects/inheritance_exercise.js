// #KEYWORDS:- get, prototype.constructor, Object.defineProperty


 const x=function(a) {
	this.a=a;

// METHOD1 :- 
	// Object.defineProperty(this,'a',{
 // 		get : function() {
 // 			return a;
 // 	}
 // })
} 


 //  x.prototype.getX=function() {
 // 	return ('accessing from getx:-'+objx.a);
 // }


 const y=function(a,b) {
	this.b=b;
// METHOD2:- 
	x.call(this,a);
	this.getY=function() {
		return this.b;
	}
}
   

 x.prototype.getX=function() {
 	return ('accessing from getx:-'+this.a);
 }

y.prototype=Object.create(x.prototype);
y.prototype.constructor=y;


const objx=new x(2,3)
// Object.seal(objx);
// Object.freeze(objx);


const objy=new y('ary','sim')

console.log(`objy.getX():- ${objy.getX()}`);
console.log(`objy.getY():- ${objy.getY()}`);