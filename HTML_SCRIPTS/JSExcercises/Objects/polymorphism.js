

function extend(Child,Parent) {
	Child.prototype=Object.create(Parent.prototype);
	Child.prototype.constructor=Child;
}
function girlFriend(name,age,bestVirtue) {
	this.name = name;
	this.age= age;
	this.bestVirtue=bestVirtue;

}

girlFriend.prototype.display=function() {
	console.log(`"${this.name}" WAS "${this.age}" WHEN I MET HER. I LIKED HER AS SHE WAS "${this.bestVirtue}"`);
}

function wife(reason) {
	this.reason=reason;
	girlFriend.call(this,'sim','25','Fair and lovely');
}



extend(wife,girlFriend);

wife.prototype.display=function() {
	console.log(`${this.name}" WAS "${this.age}" WHEN SHE BECAME MY WIFE. REASON BEING "${this.bestVirtue}"`)
}

function notAGf() {
	girlFriend.call(this,'AudiTT','28','LONELY AND VULNERABLE');
}

extend(notAGf,girlFriend);

notAGf.prototype.display=function() {
	console.log(`"${this.name}" WAS "${this.age}" WHEN I MET HER. I LIKED HER AS I WAS "${this.bestVirtue}"`);
}



const gf1st=new girlFriend('SEEMA','23',[
	'homely', 'cute', 'honest','pretty']);

const gf2nd=new girlFriend('ADITI','28',[
	'GOOD-FRIEND','MATURED','UNDERSTANDING']);

const gf3rd=new girlFriend('Samira','27',['SEXY','FIT','DUSKY']);

const gf4th=new notAGf();

const mywife=new wife('LOVE AT FIRST SIGHT');


// The following code depicts polymorphism. Same display method which is inherited by all child objects
// can be used by different objects in different ways. 
const girl=[gf2nd,gf3rd,gf4th,gf1st,mywife]

for (let girls of girl) {
	console.log(girls);
}

for (let g in girl) {
	console.log('-'+g);
}

// The above code in normal procedural programming language would have been written as follows.
// The code is exhaustive and there would have either 5 different functions or 1 function with
// different parameter everytime. the same function would have been called multiple times.
 // for (let girls of girl) {
 // 	if (girls.type==gf1st) {
 // 		displayOfgf1st()
 // 	} else if (girls.type==gf2nd) {
 // 		 		displayOfgf2nd()
 // 	} else if (girls.type==gf3rd) {
 // 		 		displayOfgf3rd()
 // 	} else if (girls.type==gf4th) {
 // 		 		displayOfgf4th()
 // 	} else {
 // 		displayOfwife()
 // 	}
 // }
