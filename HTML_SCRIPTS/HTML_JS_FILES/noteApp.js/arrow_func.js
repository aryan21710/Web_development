
const yargs=require('yargs');
const util=require('util');
const operation=yargs.argv._;
console.log('yargs:-'+util.inspect(yargs.argv));
const argv=yargs
.command('square','PERFORM SQUARE OF A NUMBER', {
	number: {
		describe : 'VALID INTEGER NUMBER',
		demand : 'true',
		alias : 'n',
	} 
})
// .command('op','WHAT OPERATION TO PERFORM', {
// 	square: {
// 		describe:'PERFORM SQUARE OF A NUMBER',
// 		demand: 'true',
// 		alias:'s',
// 	}
// })
.help()
.argv;

var calc=(x,operation)=> { 
		if (operation=='square') {
			return (x * x);
		}
}


var num=yargs.argv.n || yargs.argv.number;

if (num!=undefined && parseInt(num)) {
	console.log('MATH OPERATION NEEDS TO BE PERFORMED:-'+operation);
	console.log('NUMBER ON WHICH OPERATION NEEDS TO BE PERFORMED:-'+num);
	console.log(`SQUARE OF 3 IS :-' ${calc(num,operation)}`);
} else {
	console.log('PLEASE PASS VALID INTEGER NO:-');
}



var car= {
	make: 'LAMBORGHNI',
	model : 'URUS',
	type : ' SUV',
	printFeatures  () {
		console.log(`${this.make} ${this.model} IS MY FAV ${this.type}`)
		console.log(arguments);
	}
}

car.printFeatures('AUDI','Q7','SUV');
