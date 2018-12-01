

//1] NORMAL FUNCTION INTO FUNCTION INTO FUNCTION

// function add(a,b) {
// 	var sum=a+b;
// 	avg(sum);
// 	function avg(sum) {
// 		var avg=sum/2;
// 		display(avg);
// 		function display(avg) {
// 			console.log('avg:-'+avg);
// 		}
// 	}
// }

// OR 
// 2] CALLBACK CHAINING.
// var add=((a,b)=> {
// 	var sum=a+b;
// 	console.log('IN ADD FUNCTION');
// 	var avg=((sum)=> {
// 		var average=sum/2;
// 		console.log('IN AVG FUNCTION');
// 		var display=((average)=> {
// 				console.log('IN DISPLAY FUNCTION');
//         		console.log(`AVERAGE OF ${a} and ${b} is ${average}`);
// 		})
// 		display(average);
// 	})
// 	avg(sum);
// })
// console.log('IN MAIN BLOCK');

// add(12,13);

// OR
// 3] Promises CHAINING
var add =((a,b)=> {
	return new Promise((resolve,reject)=> {
	if (typeof (a)=='number' && typeof (b)=='number') {
		resolve(a+b);
	} else {
		reject (new Error(' INVALID NUMBER SENT'));
	}
	})
})

var avg =((sum)=> {
	return new Promise((resolve,reject)=> {
		resolve(sum/2);
	})
})

add(12,'aa').then((sum)=>{
	return avg(sum);
}).then ((average)=> {
	console.log('final answer:-'+average);
}).catch((msg)=>{
	console.log(msg)
}


var geocode=new Promise((resolve,reject)=>{

})




