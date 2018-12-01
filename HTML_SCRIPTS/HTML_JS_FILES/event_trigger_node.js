 var http= require('http');
 var fs=require('fs');
 var Events=require('events'); // Events is a class here and not a function.
 var eventEmitter=new Events.EventEmitter(); // eventEmitter becomes an object/instance of class Events

 http.createServer(function(req,res) {
 	 eventEmitter.on('readfile', readFileFunc);
 	 eventEmitter.emit('readfile', function() {
 	 	console.log('emit is called');
 	 });
 	function readFileFunc() {
 		res.writeHead(200, {'Content-Type':'text/html'});
 		fs.unlink('dummy.html',function(err,data) {
 			console.log('FILE IS DELETED:-');
 			res.write('<br>');

 			if (err) {
 				res.write('404 ERROR OCCURED');
 				res.end();
 			} else {
 				fs.readFile('dummy.html',function(err,data) {
 					if (err) {
 				res.write('404 ERROR OCCURED.');
 				res.end();
 				} else {
 					res.write('THE CONTENTS OF FILE ARE:-'+data);
 					res.write('<br>');
 					res.end('FILE IS NOT DELETED');
 				}
 				});
 				res.write('THE CONTENTS OF FILE ARE:-'+data);
 				res.write('<br>');
 				res.end();
 			}

 		});
 	};

 	// eventEmitter.on('readfile', readFileFunc);

 }).listen(8080);