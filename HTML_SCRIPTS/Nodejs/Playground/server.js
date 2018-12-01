
const http=require('http');
const util=require('util');

http.createServer((req,res)=> {
	console.log(util.inspect(req.url, undefined,4));
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write(util.inspect(req, undefined,4));

	res.write('I M WRITTEN AS STRING');
	res.write('<br>');
	const obj='THIS IS H2 <br> SECOND LINE OF H2 <br> THIRD LINE OF H3'
	res.write('<h1> THIS IS H1 <br> GOING TO NEXT LINE <br> LAST LINE OF H1 </h1>');
	res.write(obj);
	res.write('<p style="color : red"> I M HTML DATA BELONG TO P NODE </p>')
	res.end()

}).listen(8080);

