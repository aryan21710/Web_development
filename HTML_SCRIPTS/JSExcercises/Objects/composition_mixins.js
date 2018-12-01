// MIXINS ARE FUNCTIONS WHICH WRAPS THE OBJECT ASSIGN STATMENT. WHEN YOU WANT TO COPY ALL THE PROPERTIES/METHODS
// OF MULTIPLE OBJECTS TOGTHER INTO A NEW OBJECT YOU USE OBJECT.ASSIGN. YOU COPY THE OBJECTS INTO PROTOTYPE OF
// THE OBJECT HERE AND THEN MAKE A OBJECT OUT OF IT.
// fIRST ...sources is the spread property and next ... is the rest property.
// ... will enable to pass multiple objects to one argument called ...sources.
function mixin(target,...sources) {
    Object.assign(target,...sources);

}

function caneat() {
	this.status = 'vegetatarian';
	this.food = 'pizza';
	let name='ary';
	this.display= function() {
		console.log(`${name} IS EATING ${this.status} ${this.food}`);
	}
}
const canEat= new caneat();

const canWalk={
	distance: '10km',
	walkStatus () {
		console.log(`${distance} walked`)
	}
}

function person() {
	this.food='biryani';
	let name='sim';
}


const test=canEat;
test.display=function() {
	console.log(`test is EATING ${this.status} ${this.food}`);
}
mixin(person.prototype,canEat,canWalk);
const Person=new person();

console.log(Person);

const canSwim= {
	type : 'breastStroke',
	typeSwimDisplay() {
    	console.log(`Can Swim ${this.type} style`);
	}
}

function goldFish() {

}

mixin(goldFish.prototype,canSwim,canEat);
const goldfish=new goldFish();
goldfish.food='plants';
