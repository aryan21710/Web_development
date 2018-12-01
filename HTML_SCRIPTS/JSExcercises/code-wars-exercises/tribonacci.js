// function tribonacci(signature,n) {
// 	console.log(`SIGNATURE:-${signature} and n is:- ${n}`);
// 	console.log('--------------------------------------------------------');
//     for (i=0; i < n; i++) {

//     	var sum=0;
// 		signature.forEach((val,ind)=>{
// 			if ((ind==signature.length-1) || (ind==signature.length-2) || (ind==signature.length-3)) {
//         		sum+=val;

//     		}
// 		})
// 		console.log(`ITERATION:- ${i} AND SUM FOR ${signature} IS ${sum}`)
// 		signature.push(sum);
// 		console.log('--------------------------------------------------------');

// 	}

// 	return signature.splice(0,n,0);
	
// }

// OR

// function tribonacci(signature,n) {
// 	console.log(`SIGNATURE:-${signature} and n is:- ${n}`);
//     for (var i=0; i < n-3; i++) {
//     	signature.push(signature[i]+signature[i+1]+signature[i+2]);
// 	}

// 	return signature.splice(0,n);
	
// }






console.log(tribonacci([1,1,1],10))