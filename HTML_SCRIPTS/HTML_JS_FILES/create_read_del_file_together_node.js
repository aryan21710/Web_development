
// THERE ARE 2 WAYS OF ADDRESSING THE CREATE, READ AND DELETE A FILE. THE 1ST APPROACH WILL WORK
// THE SECOND ONE WILL GIVE ERROR. 
var fs = require('fs');
var http = require('http');
var url = require('url');
var upper = require('upper-case');
var os= require('os');

http.createServer(function(req,res) {
	fs.appendFile('transition_affects1.html', 'THIS FILE IS CREATED BY NODEJS', function(err) {
		res.writeHead(200 , {'Content-Type':'text/html'});
		if (err) {
			res.writeHead(400 , {'Content-Type':'text/html'});
			res.write('ERROR OCCURED:-');
			res.end('404 ERROR');
		} else {
			res.write('FILE CREATED:-');
			res.write('<br>');
			fs.readFile('transition_affects1.html', function(err,data) {
					// res.writeHead(200 , {'Content-Type':'text/html'});
					if (err) {
						res.write('ERROR OCCURED:-');
						res.end('404 ERROR:-');
					} else {
						res.write('CONTENTS OF FILE:-'+data);
									res.write('<br>');

						fs.unlink('transition_affects1.html', function(err) {
						if (err) {
							res.write('NOT ABLE TO DELETE THE FILE');
										res.end('404 ERROR:-');
						} else {
							res.write(' FILE DELETED:-');
										res.write('<br>');

										res.end();
						}
						});
				}
			});
		}
	});

}).listen(8080);


// FOLLOWING CODE WONT WORK:-

// http.createServer(function(req,res) {
// 	fs.appendFile('transition_affects1.html', 'THIS FILE IS CREATED BY NODEJS', function(err) {
// 		res.writeHead(200 , {'Content-Type':'text/html'});
// 		if (err) {
// 			res.write('ERROR OCCURED:-');
// 			res.end('404 ERROR');
// 		} else {
// 			res.write('FILE CREATED:-');
// 			res.end();
// 		}
// 	});

// 	fs.readFile('transition_affects1.html', function(err,data) {
// 				res.writeHead(200 , {'Content-Type':'text/html'});

// 		if (err) {
// 			res.write('ERROR OCCURED:-');
// 			res.end('404 ERROR:-');
// 		} else {
// 			res.write('CONTENTS OF FILE:-'+data);
// 			res.end();
// 		}
// 	});

// 	fs.unlink('transition_affects1.html', function(err) {
// 		if (err) {
// 			res.write('NOT ABLE TO DELETE THE FILE');
// 						res.end('404 ERROR:-');

// 		} else {
// 			res.write(' FILE DELETED:-');
// 						res.end();

// 		}
// 	});
// }).listen(8080);