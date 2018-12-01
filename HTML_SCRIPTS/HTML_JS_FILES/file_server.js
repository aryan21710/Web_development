

var fs = require('fs');
var http = require('http');
var url = require('url');
var upper = require('upper-case');
var os= require('os');
const util=require('util');



// http.createServer(function(req,res) {
// 	const d= new Date();
// 	var label=d.getMinutes()+d.getSeconds();
// 	fs.stat('test.html', function(err,stats) {
// 		if (err) {
// 			console.log('ERROR OCCURED')
// 		} else {
// 			console.time(label);
// 			console.log(`NAME OF THE FILE:- ${__filename}`);
// 			console.dir(typeof(stats)+';'+ Object.keys(stats));
// 			console.log('IS IT A FILE:-'+stats.isFile());
// 			console.log('IS IT A DIR:-'+stats.isDirectory());
// 			console.timeEnd(label);
// 		}
// 	});
// }).listen(8080);

	// console.log('networkInterfaces:-'+os.networkInterfaces[0]());

	// console.log('arch:-'+os.arch());
	// console.log('freemem:-'+os.freemem());
	// 	console.log('release:-'+os.release());
	// 		console.log('totalmem:-'+os.totalmem());
	// 			console.log('uptime:-'+os.uptime());



// var http = require('http');
// var formidable = require('formidable');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
// 	res.writeHead(200, {'Content-Type':'text/html'});

//       res.write('oldpath:-'+oldpath);
//       res.write('<br>');
//       res.write('name:-'+files.filetoupload.name);
//       var newpath = 'C:/Users/aryan/' + files.filetoupload.name;
//             res.write('newpath:-'+newpath);

//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

function upperCase(text) {
	console.log(' uppercase function is called');
	return(upper(text));
}

http.createServer(function(req,res) {

	 const fileInput=util.inspect(res, { compact: true, depth: 5, breakLength: 80 });
	// parse=url.parse(req.url, true);
	// var pathname= '.'+ parse.pathname;
	console.log(upperCase('make me upper Case'));
	fs.watch('testdir', function(eventType,fileName) {
			global.console.log(`event type is: ${eventType}`);	
			if (fileName) {
					console.log(`FILENAME PROVIDED:- ${fileName}`);
				} else {
					console.log(`FILENAME NOT PROVIDED`);
				}
			});

	fs.writeFile('testdir/response_object.txt', fileInput, function(err,data) {
		if (err) {
			res.writeHead(404, {'Content-Type':'text/html'});
			return res.end('404 ERROR OCCURED WHILE WRITING TO THE FILE');
		} else {
			res.writeHead(200, {'Content-Type':'text/html'});
			return res.end('FILE WRITE SUCCESSFUL');
		}
	});
}).listen(8080);

// console.log(module);
module.exports.upperCase=upperCase; // THIS IS MAKING 'upperCase function' public.




