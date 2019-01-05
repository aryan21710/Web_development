//#KEYWORD:- [http.createserver, util.inspect]
const http=require('http');
const util=require('util');

// VANILLA NODEJS WAY OF CREATING SERVER. 
http.createServer((req,res)=> {
	console.log(util.inspect(req.url, undefined,4));
	// THIS WILL SET THE HEADER OF ACCEPT ATTRIBUTE TO TEXT/PLAIN WHICH INFORMS THE CLIENT THAT
	// DATA ITS SENDING IS OF TYPE TEXT/PLAIN AND STATUSCODE OF RESP.HEADER IS 200 WHICH MEANS ALL OK.
	res.writeHead(200, {'Content-Type':'text/plain'});

	// res.write (multiple writes + res.end is same as res.send) Only difference being that we can havr
	// only one res.send code in the entire block instead of multiple res.write.
	res.write(util.inspect(req, undefined,4));

	res.write('I M WRITTEN AS STRING');
	res.write('<br>');
	const obj='THIS IS H2 <br> SECOND LINE OF H2 <br> THIRD LINE OF H3'
	res.write('<h1> THIS IS H1 <br> GOING TO NEXT LINE <br> LAST LINE OF H1 </h1>');
	res.write(obj);
	res.write('<p style="color : red"> I M HTML DATA BELONG TO P NODE </p>')
	res.end()

}).listen(8080);

