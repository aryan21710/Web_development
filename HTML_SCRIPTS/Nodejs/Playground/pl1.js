
const fs=require('fs');
const http=require('http');
const os=require('os');

// BELOW IS A CALLBACK TO CALLBACK

http.createServer((req,res)=> {
	res.writeHead(200, {'Content-Type':'text/plain'});
	const user=os.userInfo();
	console.log('calling appendFile and Readfile')
	fs.appendFile('dummy.txt', `${user.username} LOGGED IN `, (err)=>{
	if (err) throw new Error('not able to append to a file');
}), 
	fs.readFile('dummy.txt', (err,data)=>{
	 if (err) throw new Error('NOT ABLE TO READ THE FILE');
	 res.write(data+'\n');
	 res.end('END OF RESPONSE CODE');

});
console.log(module);
}).listen(8080);
 

 module.exports.add=(a,b)=> {
 	return a+b;
 }
