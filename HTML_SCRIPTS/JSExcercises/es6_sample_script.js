//#KEYWORDS:-[destructuring objects, destructuring array, default parameters, spread, rest, template literals on different lines, for of loop, array.includes(), ]

// 1]
// FOLLOWING EXAMPLE COVERS DESTRUCTURING OBJECTS AND TEMPLATE LITERALS TO PRINT TEXT ON DIFFERNT LINES.
// DESTRUCTURING OBJECTS ELIMINATE THE NEED OF USING THE FULL 'OBJ.PROPNAME' INSTEAD YOU CAN JUST USE
// ONE VARIABLE EITHER PROPERTYNAME OR ANY VARIABLE OF YOUR CHOICE AS A SHORT FORM.

const obj= {
	name : 'ary',
	wifename : 'sim',
	myAge : 39,
	herAge : 27,
}

const {name,wifename,myAge,herAge}=obj
console.log(`${name} who is ${myAge} has 
wife named ${wifename}. She is
${herAge} Years old`);
//OR
const {name : n,wifename : w, myAge :mAge, herAge:hAge} = obj;
console.log(`${n} who is ${mAge} has 
wife named ${w}. She is
${hAge} Years old`);

const book= {
	title:'Da Vinci Code',
	pages: 300,
	Author : {
		sex: 'Male',
		Name : 'BROWN'
	}
}

const {title,pages}=book;
const {sex,Name,lastname:lname='GORDON'}=book.Author
console.log(`${Name} ${lname} WROTE ${title} WHICH HAS 
${pages} pages`);

//2
// padstart and padlength in a string:- It will add the string element ('-' in below case) or string at 
// the end of the string till the length of string reaches the specified no (50 in below case.)

pad=(elem)=>{
	console.log('\n'+elem.padEnd(50,'-')+'\n');
}

pad('-');

//3]

// DESTRUCTURING ARRAYS:- NORMAL ARRAY CAN BE MADE NAMED ARRAYS. (array destructuring)

const a=[11,22,33,44]
const [eleven, twelve, thirteen, fourteen] = [11,22,33,44];
console.log(`ELEMENTS OF ARRAY'S USING DESTRUCTURING ARRAYS ARE AS FOLLOWS:-
${eleven}, ${twelve}, ${thirteen}, ${fourteen}`);

pad('-');


//3b] Example for array destructuring:-

const item=['Coffee (hot)','$2.00', '$2.50', '$3.00']
const [coffee, , MPrice]=item;

console.log(`A Medium "${coffee}" costs "${MPrice}"`);


//4 Rest and Spread Operator:-


restOp=((...num)=>{
	console.log(`ARGUMENTS PASSED TO THIS FUNCTION ARE AS FOLLOWS
${num}`);
})

restOp('name','lname','age');

pad('-');


// 5 Default Parameters:- 
// temp(name,lname,age ) will return undefined for all the 3 parameters as those parameters are not
// passed to the function. Below case with default params wont return undefined to the script.

temp = ((name='ary', lname='sharma', age=[])=>{
	console.log(`name is not passed to this function its picked 
from default paramters:- ${name} ${lname} ${age}`)

})

temp()

pad('-')

// 6 For of loop:- Arrays/Strings and not for Objects.
restOp=((...num)=>{
	for (const n of num) {
		console.log(`Array Contains:- ${n}`);
	}

})

restOp('name','lname','age');
pad('-');


// 7 array.includes is an alternate to array.indexOf(). This will return true/false instead of -1/index

const arr=[222,333,444]
console.log('EXAMPLE OF array.includes()');
console.log(`${arr.includes(222)} && ${arr.indexOf(222)}`);
console.log(`${arr.includes(22)} && ${arr.indexOf(22)}`);

pad('-');


//8 Nested object destructuring using spread operator.

const expense=[{
	description: 'RENT',
	amount: 10000,
	note: 'RENT FOR THE MONTH OF APRIL'
},{
	description: 'MOVIE',
	amount: 600,
	note: 'ENDGAME MOVIE'
},{
	description: 'MOBILE BILL',
	amount: 399,
	note: '3 MONTHS MOBILE BILL'
}]

const updateExp=(expense,{...newexp})=>{
	// console.log(':' + JSON.stringify(exp, null, 4))
	return expense.filter((exp,ind)=> {
		if (exp.description===newexp.description) {
			console.log('MATCH:-' + JSON.stringify(exp, null, 4));
						return {...exp,...newexp.amount}


		}
	})
}

console.log('RETURN VALUE:-'+JSON.stringify(updateExp(expense,{description: 'MOBILE BILL',amount: 699})));