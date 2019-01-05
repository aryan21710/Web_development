
// #KEYWORDS:- [EXPRESS SERVER, hbs partials, hbs registerhelper, explanation of hbs and handlebars, res.render, template-engines, explanation of app.get,middleware, app.use, express, app.listen, sending json/html data as a response back to the client]
// #DESCRIPTION
const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
const PORT=process.env.PORT || 3000;
const app=express();


// public dir is a static dir inside which you keep all the document and images for public
// viewing. The below code will set the public dir as a express static dir. app.usr will let 
// you set a middleware and register a function express.static in this case.
app.use(express.static(__dirname+'/public'));


// app.use which is a middleware will let you do some program specific coding by calling a function. Here you can
// write any program specific code which will be executed. But you have to call next()
// otherwise the execution wont be passed to next line of code.

// demonstration of using our own function using app.use as a route-handler instead of using app.get which is 
// always used for setting route-handler.
app.use((req,res,next)=>{
	userinfo={
		user : process.env.USER,
		time : `${new Date().toDateString()} ${new Date().toTimeString()}`,
		httpMethod : req.method,
		url: req.url
	}
	fs.writeFile('./log.txt',JSON.stringify(userinfo,null,4), (err,res)=>{
		if (err) {
			console.log('NOT ABLE TO LOG THE DATA')
		} else {
			console.log('USER LOGIN DATA LOGGED TO ./log.txt');
		}
	})

	next();
})

// IN THE FOLLOWING MIDDLEWARE CODE SINCE next() CODE IS NOT PRESENT CONTROL WONT BE PASSED TO NEXT LINE OF
// CODE. THIS IS GENERALLY USEFUL IN CASE OF MAINTENANCE SITE. WHEN THE MAINTENANCE SITE IS
// SERVED CONTROL WONT BE PASSED TO REST OF THE WEBPAGES.
app.use((req,res,next)=>{
	console.log(req.url);
	if (req.url=='/maintenance') {
		res.render('./maintenance.hbs')
	} else {
		next();
	}
})



// partials is a concept in which you can have a common code between your html files which you can reuse 
// by defining a one common partial file instead of copying the same code in multiple files for eg:- header
// and footer. You can create one common header/footer.hbs file inside views/partials dir.
// You can then call the partials file inside your hbs file using syntax {{> partialFilename}} (without.hbs ext)
// When you render the hbs file it will internally call the partials file. You can also pass variables dynamically
// to partials file. Similarly we can put some common html code in partials file like links
// home link and about link can be kept in patials file so that whichever file is sourcing the
// partial file will have access to the both home and about link instead of having the home link
// about link code in both the home page and about page.
hbs.registerPartials(__dirname + '/views/partials');



// registerhelper lets you create common functions or js code inside hbs 
// either in patials file or .hbs file. Instead of passing a variable called
// year in res.render to multiple files /home and /about its better
// you define a function and call it inside the partial/.hbs file.
hbs.registerHelper('getYear',()=> {
	return new Date().getFullYear();
})

// This will let u set a default html template engine here we are using handlebar
// which we can use using hbs as a package which is a wrapper for handlebar.
// hbs is again a third party software for express which is nothing but a middleware
app.set('view engine','hbs');


// app.get calls the function when the client request comes to the url endpoint '/'. app.get is a route 
// handler for / url. every callback function is called with 2 arguments req and res only
// app.get serves the url ('/'). 
app.get('/',(req,res)=>{
	// res.send is intelligent enough to indentify the content-type which we need to set
	// when we create a http.creatserver in case of node  (without express only node)
	// content-type text/html is set and sent as a response back to the client in 
	// plain text if data is text only or html in case of data sent by res.send is 
	// html data (wrapped inside a html tag)
	// res.send('<h1>THIS IS H1 HEADING SENT BY EXPRESS AS A RESPONSE TO THE REQ </h1> \
	// 	THIS IS NORMAL PLAIN TEXT SENT BY EXPRESS AS A RESPONSE TO THE REQUEST')

	// OR

	// IF YOU WANT TO SEND JSON DATA AS A RESPONSE TO THE CLIENT REQUEST.
	// HERE EXPRESS IS INTELLIGENT ENOUGH TO IDENTIFY THAT WE ARE SENDING AN OBJECT
	// IT CONVERTS THE SAME INTO JSON BY ITSELF BEFORE SENDING IT. IT MAKES THE CONTENT-TYPR
	// TO APPLICATION/JSON

	res.send({
		'name' : 'aryan',
		'lname' : 'sharma',
		'wife' : 'sim',
		'age' : 39,
 	})

});



// HERE U ARE CREATING ONE MORE ROUTE FOR PAGE /bad WHEREIN SERVER SENDS JSON DATA
// CONTAINING AN ERROR MESSAGE AND ERROR CODR
app.get('/bad',(req={},res={})=>{
	res.send({
	errorCode: 404,
	errorMessage: 'PAGE CURRENTLY NOT AVAILABLE'
	})
})



app.get('/maths_game',(req,res)=>{
	res.render('./maths_actual_hame.hbs')
})


// res.render will let you render a hbs file and its html content. Make sure you put
// all .hbs file inisde a views directory as its where express looks for the hbs file
// to render it.
// app.get('/about', (req,res)=>{
// 	res.render('./about.hbs')
// });


// OR


// THIS IS HOW YOU SHOULD BE USING HANDLEBARS. HERE YOU ARE PASSING VARIABLES FROM SERVER.JS TO 
// THE partials file. The partial file gets called by .hbs file (./home1.hbs) dynamically. 
// See the views/home1.hbs and views/partials/header.hbs file to understand the syntax.
// home1.hbs lies inside views dir but since home1.hbs has {{> header.hbs}} code in it
// it will look into views/partials dir a file called header.hbs and will try to execute it.
app.get('/home',(req,res)=>{
	res.render('./home1.hbs', {
		User : 'Aryan"s',
		// Year : new Date().getFullYear()
	});
});


// year is not passed as a key/value pair instead its passed by a function
// defined inside registerHelper on the top. 
app.get('/about',(req,res)=>{
	res.render('./about1.hbs', {
		User : 'Aryan"s',
		// Year : new Date().getFullYear()
	});
});



// without server listening on a particular port and request coming only on that port
// server wont work. app.listen takes one more optional argument which is a function
// which gets called once the server starts listenining on that port.
app.listen(PORT, ()=> {
	console.log(`SERVER LISTENING ON PORT ${PORT}`);
});


