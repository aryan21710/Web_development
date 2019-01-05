
const fs=require('fs');

// setTimeout(()=> {
// 	console.log('THIS IS ASYNC CALL CONSOLE.LOG')
// }, 0);


// OR BELOW CODE IS ALSO ASYN CALL AS ABOVE. UNCOMMENT AND PRINT AND SEE THE
// SEQUENCE OF THE LOGS PRINTED..

fs.readFile('./Notesdata.json', (err,data)=>{
		if (err) {
			console.log('ERR READING FILE:-'+err)
		} else {
			console.log('DATA :-'+data);
		}
});

console.log('OUTSIDE READFILE SYNC CALL.'+__filename);