// #KEYWORDS:- [weakmap,HIDING CLASS DETAILS USING WEAKMAP, ABSTRACTION];
// class Details {
//     constructor(name,lname,age,son) {
//         this.name=name;
//         this.lname=lname;
//         this.age=age;
//         this.son=son;    
//         wm.set(this, {wife:'sim'})    
//     }
// }

// Details.prototype.getInfo=function() {
//     let wifename = wm.has(this) ? wm.get(this) : console.log('CANT DISPLAY THE WIFENAME');
//     console.log('WIFENAME:-'+wifename.wife);  
// }

// let wm = new WeakMap();
// const person=new Details('aryan','sharma',39,'ryan');
// person.getInfo();

// THERE IS NO WAY YOU CAN MAKEOUT WHAT VALUE YOU ARE SETTING TO WIFE VARIABLE AND WHERE. THATS THE EXAMPLE OF
// HIDING DETAILS OF A CLASS FROM OTHERS (ABSTRACTION);

// FROM BELOW CHROME BROWSER VIEW OF THE PERSON OBJECT EVEN IF YOU INSPECT THE 
// ELEMENTS AND VIEW ITS CONTENTS YOU CANNOT FIND OUT FROM WHERE YOU ARE GETTING
// THE VALUE OF WIFE.
// person
// Details { name: "aryan", lname: "sharma", age: 39, son: "ryan" } age: 39lname: "sharma"name: "aryan"son: "ryan"__proto__: getInfo: ƒ()constructor: class Details__proto__: Object
// person.getInfo
// ƒ() {
//     let wifename = wm.has(this) ? wm.get(this) : console.log('CANT DISPLAY THE WIFENAME');
//     console.log('WIFENAME:-' + wifename.wife);
// }
// person.getInfo()
// VM1400: 13 WIFENAME: -sim
// undefined


//#KEYWORDS:- BELOW IS AN EXAMPLE OF HIDING A FUNCTION USING WEAKMAP
class Details {
    constructor(name, lname, age, son) {
        this.name = name;
        this.lname = lname;
        this.age = age;
        this.son = son;
        wm.set(this, ()=>{
            return this.name+' '+this.lname;
        })
    }
}

Details.prototype.getInfo = function () {
    let details = wm.has(this) ? wm.get(this) : console.log('CANT DISPLAY THE DETAILS');
    console.log(`${details()} is ${this.age} YEARS OLD`);
}

let wm = new WeakMap();
const person = new Details('aryan', 'sharma', 39, 'ryan');
person.getInfo();