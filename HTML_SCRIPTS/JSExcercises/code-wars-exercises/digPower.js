//https://www.codewars.com/kata/playing-with-digits/train/javascript

function digPow(n, p){
	console.log(String(n)+String(p)+ String(n).length-1);
	var sum=0;
	for (var i=0; i < String(n).length; i++) {
		sum+=Math.pow(Number(String(n)[i]),p+i);
	}
	
	console.log('sum:-'+sum);
	var k=Number.isInteger(sum/n) ? sum/n : -1
	return k;

}

console.log(`digPow(89,1):- ${digPow(46288  ,3)}`);

