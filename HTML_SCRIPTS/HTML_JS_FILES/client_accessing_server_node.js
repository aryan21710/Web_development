const http=require('http');
const events=  require('events');
const MyEventsObj=new events.EventEmitter();
const url=require('url');
const util=require('util');
const fs=require('fs');
const os=require('os');
cnt=0;

http.createServer((req,res)=> {
	parse=url.parse(req.url,true);
	// console.log('parse:-'+util.inspect(req));
	MyEventsObj.on('User-Connected',(cnt)=> {
		cnt+=1;
		var pathname='.'+parse.pathname;
		console.log(`USER: ${os.userInfo().username} LOGGED IN TO ACCESS THE PAGE ${pathname}`);
		fs.readFile(pathname, (err,data)=> {
			res.writeHead(200, {'Content-Type':'text/html'});
			if (err) {
				res.writeHead(400, {'Content-Type':'text/html'})
				res.end('404 ERROR OCCURED WHILE DISPLAYING THE PAGE'+err);
			} else {
				res.write('FILE CONTENTS ARE:-'+data);
				res.end();
			}
		});
		
	});

	MyEventsObj.emit('User-Connected',cnt);
}).listen(8080);