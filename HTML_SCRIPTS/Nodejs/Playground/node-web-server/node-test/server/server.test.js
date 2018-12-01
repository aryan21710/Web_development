
// #KEYWORD:- [ TESTING EXPRESS APP USING MOCHA, SUPERTEST,]

// WE CAN TEST OUR EXPRESS APP SERVER.JS USING 3RD PARTY TEST MODULE CALLED SUPERTEST USING MOCHA
// DOCUMENTATION LINK FOR SUPERTEST IS:- https://github.com/visionmedia/supertest
const request=require('supertest')

// WE NEED TO SOURCE APP FROM SERVER.JS TO RUN SUPERTEST AGAINST IT.
const app=require('./server').app
const expect=require('expect');

// DONE IS NEEDED TO INFORM MOCHA THAT WE ARE RUNNING TEST TO TEST AN ASYNC SCRIPT
// ONLY AFTER DONE IS NOTICED AFTER ASSERTION WHICH IS NOTHING BUT EXPECT CALL ON THE 
// LAST LINE, THE MOCHA TEST GETS OVER OTHERWISE IT WILL CONSIDER THE TEST AS A
// SYNCHRONOUS SCRIPT.


// DESCRIBE WILL MAKE U CLUB ALL THE TESTCASES BELONGING TO ONE SECTION

it('SHOULD RETURN HELLO WORLD',(done)=>{
	// request will check for parameters returned by app an will do assertion accordinlgy and will pass
	// and fail the script.
	request(app)
	// when the request to http is using http get method as mentioned in server.js app.get.
	// check for following assertions as mentioned by expect()
	.get('/')
	.expect(200)
	// IF YES. WHETHER THE RESPONSE SEND BY SERVER IS FOLLOWING OBJECT
	.expect({
		message: 'USER LOGGED IN SUCCESSFULLY',
		statusCode: 200,
		time : `${new Date().toDateString()} ${new Date().toTimeString()}`

	})
	.end(done);
});

// ANOTHER TEST FOR /ABOUT

// following test check whether the body which is part of response object contains object
// specified under toInclude(). 
// THIS IS AN EXAMPLE OF CUSTOM ASSERTION WHERE YOU PASS THE FUNCTION WITH RES AS AN ARG

it('SHOULD INCLUDE USER ARYAN',(done)=>{
	request(app)
	.get('/about')
	.expect((res)=>{
		expect(res.body).toInclude({name:'aryan', age: 39})
	})
	.end(done);
})