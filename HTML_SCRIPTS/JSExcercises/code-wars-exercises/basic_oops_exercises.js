
console.log('----------------------------------PROGRAM 1----------------------------');
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last; 
    let name= this.firstName+ ' '+ this.lastName;

    Object.defineProperty(this, 'name', {
    	get : function() {
    		return name;
    	}
    })



}

 var n=new NameMe('ary','sharma');
 console.log(n.name)
 console.log(n.firstName);
 console.log(n.lastName);
 // console.log(NameMe.prototype);

console.log('----------------------------------PROGRAM 2----------------------------');

 var Ghost=function() {
 	let myArray=['purple','yellow','white','red'];
 	this.color=myArray[Math.floor(Math.random()*myArray.length)];

 	Object.defineProperty(this,'color', {
 		get : function() {
 			return color;
 		}	
    })
 }

// OR

var Ghost=function() {
 	let myArray=['purple','yellow','white','red'];
 	this.color=myArray[Math.floor(Math.random()*myArray.length)];
 }

 var ghost=new Ghost();
 console.log(ghost.color);

console.log('----------------------------------PROGRAM 3----------------------------');

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name;} 
}

function declareWinner(fighter1,fighter2,firstAttacker) {
	if (fighter1==firstAttacker) {
		fighter2.health-=fighter1.damagePerAttack;
		if (fighter2.health <=0 || fighter1.health > fighter2.health) {
			console.log(`${fighter1.name}`);
		} else {
			console.log(`${fighter2.name}`);
		}
		console.log(`${firstAttacker} ATTACKED WITH POWER ${fighter1.damagePerAttack}...${fighter2.name} HAS HEALTH LEFT ${fighter2.health} AND ${fighter1.name} HAS HEALTH LEFT ${fighter1.health}`);

		
	} else {
		if (fighter1.health <=0 || fighter2.health > fighter1.health) {
			console.log(`${fighter2.name}`);
		} else {
			console.log(`${fighter1.name}`);
		}
			console.log(`${firstAttacker} ATTACKED WITH POWER ${fighter1.damagePerAttack}...${fighter2.name} HAS HEALTH LEFT ${fighter2.health} AND ${fighter1.name} HAS HEALTH LEFT ${fighter1.health}`);		fighter1.health-=fighter2.damagePerAttack;

	}	

}

// var fighter1=new Fighter('Brock Lesnar',5,3);
// var fighter2=new Fighter('GoldBerg',2, 6);
// console.log(declareWinner(fighter1, fighter2, fighter1));
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")


	declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")

	declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")


	declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")

	declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")

    
	declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")


console.log('----------------------------------PROGRAM 4----------------------------');

class Num {
  constructor(num){
    this.num=num;

  }

  [Symbol.toPrimitive](hint) {
  if (hint == 'string') {
    return this.toString();
  }
  return this.num;
 }


 
  toString() {
    return "The number is " + this.num;
  }
  valueOf() {
    return {num: this.num};
  }

}
// OR FOLLOWING WAY.
 // Num.prototype[Symbol.toPrimitive] = function (hint) {
 //  if (hint == 'string') {
 //    return this.toString();
 //  }
 //  return this.num;
 // }

x = new Num(100);
y = new Num(5);
console.log(++x);
console.log(new Num(100) + new Num(5));
console.log((x + y) == 105);
console.log((x.num*y.num) == 500);
console.log((x.num-y.num) == 95);
console.log((x.num/y.num) == 20);
x.num=100.5;
console.log(Math.floor(x.num) == 100);

x = new Num(100);
console.log(x.toString() == "The number is " + x.num);
console.log(x.valueOf() + {num: x.num});
