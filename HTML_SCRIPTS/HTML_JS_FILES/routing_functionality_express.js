var express=require('express');
var app=express();

app.use(express.static('public'));

app.get('/',function(req,res) {
	res.send('WELCOME TO THE HOME PAGE:-');
});

app.get('/test.html', function(req,res) {
	res.send(`WELCOME TO THE ${__dirname} ${req.url}`);
});

// app.get('/form_for_express.html', function(req,res) {
// 	res.sendFile(`${__dirname} ${req.url}`);
// })

app.get('/process.get', function(req,res) {
	res.send(` NAME ENTERED IS:- ${req.query.FirstName} ${req.query.lastName}`)
})



const port=8000;
app.listen(port);