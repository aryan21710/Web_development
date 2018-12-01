
var http=require('http');
var fs=require('fs');
var url=require('url');
var util=require('util');
// var upp=require('./file_server.js') 

http.createServer(function(req,res) {
	console.time('LABEL1:-');
	console.log(`filename is ${__filename} AND module value is:- ${module}`);
	// console.log('upp :-'+upp);
	console.log(module);

	// console.log(upp.upperCase('make me upper Case'));

	// req.url='https://www.google.co.in/search?q=multistrada&rlz=1C1NDCM_enIN787IN787&oq=multistrada&aqs=chrome..69i57j0l5.12009j0j8&sourceid=chrome&ie=UTF-8';
	console.log('REQUESTED URL:-'+req.url);
	parse=url.parse(req.url,true);
	console.log('req:-'+util.inspect(parse));
	var pathname='.'+parse.pathname;
	var host=parse.hostname;
	console.log('path:-'+pathname);
	console.log('host:-'+host)
	console.log('req.query:-'+req.query);
	fs.readFile(pathname,function(err,data) {
		if (err) {
			res.writeHead(404, {'Content-Type':'text/html'});
			return res.end('404 error occured');
		} else {
			res.writeHead(200,{'Content-Type':'text/html'});
			// res.write('THE CONTENTS OF THE FILE ARE AS FOLLOWS:-');
			res.write(data);
			return res.end();
		}
	});
	console.timeEnd('LABEL1:-');

}).listen(8080);
