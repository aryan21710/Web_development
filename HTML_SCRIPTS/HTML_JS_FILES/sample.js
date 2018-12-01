
var http= require('http');
var dt=require('./sample_modulefile');
var fs= require('fs');


// http.createServer(function(req,res) {
// 	res.writeHead(200,{'Content-type':'text/html'});
// 	res.write('THE TIME RIGHT NOW IS:-'+dt.myModToShowDate());
// 	res.write('req.url:-'+req.url);
// 	res.write('<br>');

// 	res.write('<h1> THIS IS HEADING </h1>');
// 	res.write('<p style="color:red"> THIS IS PARA </p>');
// 	res.write('<img style="width:200px; height: 200px" src="./booty.jpg" alt="SAMPLE PIC"></img>');

// 	res.write('<br>');
// 	res.end('WELCOME TO NODEJS SERVER');
// }).listen(8080);




// fs.appendFile('./dummy_nodejs_file.html', 'ENTERRED BY NODEJS '
// , function(err) {
// 	if (err) throw(err);

// });

// http.createServer(function(req,res) {
// 	res.writeHead(200, {'Content-Type':'text/html'});
// 	res.write('READING THE FILE NOW:-');
// 	res.write('<br>');
// 	fs.readFile('./dummy_nodejs_file.html', function(err,data) {
// 		res.write(data);
// 		res.end();
// 	});
// 	// res.write('CREATING ANOTHER EMPTY FILE NOW ');
// 	// fs.open('./../quiz_app.html','w', function(err,file) {
// 	// 	if (err) throw err;
// 	// });
// 	// res.write('READING THE FILE AGAIN:-');
// 	// fs.readFile('./../quiz_app.html', function(err,data) {
// 	// 	res.write(data);
// 	// 	res.end();
// 	// });

// }).listen(8080);


// fs.unlink('./dummy_nodejs_file.html', function(err) {
// 	if (err) {
// 		console.log('deleted');
// 	} else {
// 		console.log('FILE NOT PRESENT');
// 	}
// });

var url=require('url');
// var address='file:///C:/Users/aryan/Desktop/CODING/HTML_SCRIPTS/box-blaster.html';
var address='https://www.google.co.in/search?q=maharashtrian+dal+recipe&rlz=1C1NDCM_enIN787IN787&oq=maharashtrian+dal+recipe&aqs=chrome..69i57j0l5.10309j0j7&sourceid=chrome&ie=UTF-8';
var parseOut=url.parse(address,true);
console.log('address:-'+address);
debugger;
console.log('host:-'+parseOut.host);
console.log('pathname:-'+parseOut.pathname);
console.log('search keyword:-'+parseOut.search);

var sea=new Object();
console.log('typeof sea:-'+typeof(sea));
sea=parseOut.query;
console.log('search:-'+sea.oq);