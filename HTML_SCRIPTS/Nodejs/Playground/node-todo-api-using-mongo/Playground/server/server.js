// #KEYWORDS:- [bodyparser middleware, app.post, OBJECT DESTRUCTURING, POSTMAN, HTTP ENDPOINT SETUP]
const express = require('express');
const bodyparser = require('body-parser')

// HERE OBJ DESTRUCTURING IS NEEDED AS WE NEED THE mongoose and todo constructors
// let mongoose=require('./db/mongoose_config')
// mongoose=mongoose.mongoose
// SAME  AS 
const {mongoose}=require('./db/mongoose_config')

// let todo=require('./models/todo_config')
// todo=todo.todo
// OR
const {todo}=require('./models/todo_config')



const app=express();

// THE BODY DATA WHICH IS SENT BY CLIENT USING REQUEST OBJ WILL BE FETCHED BY BODYPARSER IN JSON FORMAT.
// here bodyparser is a middleware. THE JSON DATA WILL BE AVAILABLE INSIDE THE POST METHOD.

// bodyparser parses the HTTP request body. This is usually necessary when you need to know more than just the URL being hit,
//more specifically in the context of a POST, PATCH or PUT HTTP request where the information you want is contained in the body.
// Using body parser allows you to access req.body from within your routes, and use that data for example to create a user in a database.
app.use(bodyparser.json())

// FOR SENDING A RESOURCE OR CREATING ONE , WE USE POST HTTP METHOD. IN REST WE HAVE CRUD OPERATIONS, CREATE, READ,
// UPDATE , DELETE. FOR CREATING A RESOURCE WE USE POST. To retrieve data, you use GET.
// HERE WE WILL BE SENDING AN OBJECT TO THE SERVER, AND SERVER WILL BE CREATING A NEW MONGO MODEL WITH
// ID , DESCRIPTION AND OTHER PARAMETERS AND SEND IT BACK AS PART OF HTTP RESPONSE.

// TO SEND A REQUEST FROM A CLIENT WE NEED TO USE POSTMAN TO SIMAULATE THE REQUEST PROCESS.
// USE POST METHOD AND URL WILL BE localhost:3000/todos and click on send. WHEN U SEND THIS
// IN POSTMAN THE CONTENT-TYPE GETS SET TO APPLICATION/JSON.

// THE MONGODB SERVER SHOULD BE UP AND RUNNING IN DOS PROMPT
// IN POSTMAN WHILE SELECTING THE POST REQUEST, SELECT BODY-->RAW-->TYPE-->JSON/APP

app.post('/todos',(req,res)=>{


		const mytodo=new todo ({
				text : req.body.text,
				description : req.body.description,
		})

		// THE BELOW CODE WILL SAVE THE TODO TO MONGODB AND WILL SEND THE TODO USING RES.SEND OR
		// WILL BE SENDING ERROR USING RES.SEND(ERR) BACK TO THE CLIENT WHICH IS POSTMAN APP.
		// only mytodo object wont save the data to db.
		// the .save property will save the db to the mongodb. which returns a promise.		



		mytodo.save().then((doc)=> {
					res.send(doc);
		}).catch((err)=> {
			res.status(400).send(err);
		})
})

// FOLLOWING CODE WILL RETRIEVE DATA FROM THE SERVER.ONLY WHEN REQUEST COMES FROM 
// CLIENT USING HTTP GET METHOD.
// IN POSTMAN WHILE SENDING THE GET REQUEST SELECT BODY-->NONE
app.get('/todos',(req,res)=> {
	// todo.find() is mongodb native driver method which will return all the todos
	// in an array.INSTEAD OF USING CONSOLE.LOG WE ARE USING RES.SEND AS WE WANT TO
	// DISPLAY THE SAME ON THE CLIENT. 
	todo.find().then((mytodos)=>{
		return res.send({mytodos})
	}).catch((err)=> {
		return res.status(400).send(err);
	})

})



// SAMPLE OUTPUT OF GET:-
// {
//     "mytodos": [
//         {
//             "completed": false,
//             "completedAt": null,
//             "_id": "5c024063cab227029e991422",
//             "text": "rent",
//             "description": "RENT XFER TO NEETA",
//             "__v": 0
//         },
//         {
//             "completed": false,
//             "completedAt": null,
//             "_id": "5c026b5ef39cc8065d865d01",
//             "text": "rukmini aunty",
//             "description": "RENTAL AGREEMENT",
//             "__v": 0
//         },
//         {
//             "completed": false,
//             "completedAt": null,
//             "_id": "5c033d2d62366206f5674373",
//             "text": "INTERCEPTOR TEST TIDE",
//             "description": "CALL ROYAL ENFIELD INDIRANAGAR",
//             "__v": 0
//         }
//     ]
// }

app.listen(3000,()=>{
	console.log('SERVER STARTED LISTENING AT PORT:-3000');
})

// SAMPLE JSON RESPONSE SENT BY OUR SERVER FROM CLIENT/POSTMAN IS AS FOLLOWS:-
// {
//     "completed": false,
//     "completedAt": null,
//     "_id": "5c023a6a0ba1d302703d750b",
//     "text": "rent",
//     "description": "RENT XFER TO NEETA",
//     "__v": 0
// }