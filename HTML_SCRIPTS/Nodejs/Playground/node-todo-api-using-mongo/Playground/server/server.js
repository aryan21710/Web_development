// #KEYWORDS:- [lodash, loadash._pick, findByIdAndUpdate, $set,new Mongoose update operator, app.patch, bodyparser middleware, app.post, app.get, OBJECT DESTRUCTURING, POSTMAN, HTTP ENDPOINT SETUP, OBJECTID.ISVALID, apt.delete]
const express = require('express');
const bodyparser = require('body-parser')
// LODASH:- A modern JavaScript utility library delivering modularity, performance & extras.
const _=require('lodash')

const {ObjectID}=require('mongodb');

// HERE OBJ DESTRUCTURING IS NEEDED AS WE NEED THE mongoose and todo constructors
// let mongoose=require('./db/mongoose_config')
// mongoose=mongoose.mongoose
// SAME  AS 
const {mongoose}=require('./db/mongoose_config')

// let todo=require('./models/todo_config')
// todo=todo.todo
// OR
const {todo}=require('./models/todo_config')

// #KEYWORD:- [heroku deploy config, package.json configs]
// TO DEPLOY THE APP IN HEROKU, U NEED TO SPECIFY THE PORT NO THAT WILL BE PICKED
// FROM UR ENV VARIABLE. process.env.PORT will pick up a random PORT ON WHICH
// THE SERVER WILL BE LISTENING.
// NOW HEROKU SHOULD KNOW HOW TO RUN UR SCRIPT THATS WHY IN PACKAGE.JSON, 
// UNDER SCRIPT SECTION, DEFINE "start":"node server.js"
// ALSO u need to specify what version of node to use for running this script in pacakge.json
// use engine parameter 
  // "engines" : {
  //   "node" : "11.2.0"
  // },

// THEN U NEED TO HOST UR MONGODB ON THE HEROKU WHICH HAS AN ADD ON SERVICE CALLED 
// MLAB MONGODB. THIS WILL LET U HOST UR DB ON THE CLOUD.
// TO CONFIGURE HEROKU IN THE CURRENT DIR , DO heroku create.
// ALSO SEE THE MONGODB_URI CONFIG IN db/mongoose_config.js
const PORT=process.env.PORT || 3000;




const app=express();

// THE BODY DATA WHICH IS SENT BY CLIENT USING REQUEST OBJ WILL BE FETCHED BY BODYPARSER IN JSON FORMAT.
// here bodyparser is a middleware. THE JSON DATA WILL BE AVAILABLE INSIDE THE POST METHOD.

// bodyparser parses the HTTP request body. This is usually necessary when you need to know more than just the URL being hit,
//more specifically in the context of a POST, PATCH or PUT HTTP request where the information you want is contained in the body.
// Using body parser allows you to access req.body from within your routes, and use that data for example to create a user in a database.
app.use(bodyparser.json())

// FOR SENDING A RESOURCE OR CREATING ONE , WE USE POST HTTP METHOD. IN REST WE HAVE CRUD OPERATIONS, CREATE, READ,
// UPDATE , DELETE. FOR CREATING A RESOURCE WE USE POST. To retrieve data, you use GET.
// HERE WE WILL BE SENDING AN OBJECT TO THE SERVER FROM THE CLIENT/POSTMAN, AND SERVER WILL BE CREATING A NEW MONGO MODEL WITH
// ID , DESCRIPTION AND OTHER PARAMETERS AND SEND IT BACK AS PART OF HTTP RESPONSE.

// TO SEND A REQUEST FROM A CLIENT WE NEED TO USE POSTMAN TO SIMULATE THE REQUEST PROCESS.
// USE POST METHOD AND URL WILL BE localhost:3000/todos , CREATE AN OBJECT click on send. WHEN U SEND THIS
// IN POSTMAN THE CONTENT-TYPE GETS SET TO APPLICATION/JSON.

// THE MONGODB SERVER SHOULD BE UP AND RUNNING IN DOS PROMPT
// IN POSTMAN WHILE SELECTING THE POST REQUEST, SELECT BODY-->RAW-->TYPE-->JSON/APP

app.post('/arytodo',(req,res)=>{


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


// SAMPLE JSON RESPONSE SENT BY OUR SERVER FROM CLIENT/POSTMAN IS AS FOLLOWS:-
// {
//     "completed": false,
//     "completedAt": null,
//     "_id": "5c023a6a0ba1d302703d750b",
//     "text": "rent",
//     "description": "RENT XFER TO NEETA",
//     "__v": 0
// }

// FOLLOWING CODE WILL RETRIEVE DATA FROM THE SERVER.ONLY WHEN REQUEST COMES FROM 
// CLIENT USING HTTP GET METHOD.
// IN POSTMAN WHILE SENDING THE GET REQUEST SELECT BODY-->NONE
app.get('/arytodo',(req,res)=> {
	// todo.find() is MONGOOSE WAY OF find().toArray() method in mongodb native driver 
	// which will return all the todos
	// in an array.INSTEAD OF USING CONSOLE.LOG WE ARE USING RES.SEND AS WE WANT TO
	// DISPLAY THE SAME ON THE CLIENT. 
	// SYNTAX IS MODEL.find()
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

// U HAVE TO SEND FOLLOWING URL FROM POSTMAN USING GET METHOD
// localhost:3000/todos/5c0350ea6e8db10721279326


app.get('/arytodo/:id',(req,res)=>{
	// whatever u specify in the url above after : will be available in req.params. Here since 
	// the url is /arytodo/:id, in req.params we will have id attribute available.
	// so we can get the id attribute using req.params.id.
	const id=req.params.id;
	// FIRST CHECK WHETHER THE ID IS VALID. HERE OBJECTID IS COMING FROM NATIVE MONGO DRIVER WHICH
	// HAS THE VALIDID METHOD. SINCE MONGOOSE PACKAGE WHICH WE ARE USING IN THIS SCRIPT DOESNT HAVE
	// A SUITABLE METHOD TO CHECK FOR VALID ID, WE NEED TO CALL MONGO DB NATIVE DRIVER ONLY FOR THIS.
	if (!ObjectID.isValid(id)) res.status(404).send('NOT A VALID OBJECTID');
	todo.findById(id).then((doc)=>{
		if (!doc) res.send('DOCUMENT NOT FOUND')
		res.send({doc})

	}).catch((err)=>{
		console.log('ERROR WHILE USING GETID METHOD:='+err)
		res.status(404).send(err)
	})
})

// FOLLOWING CODE WILL DELETE THE TODO.

app.delete('/arytodo/:id',(req,res)=>{
	const id= req.params.id
	
	if (!ObjectID.isValid(id)) return res.status(404).send('NOT A VALID ID')
	// find and delete the todo with id as a parameter in the db. db will be the model coming
	// from sourcing the todo_config file as shown above.
	todo.findByIdAndRemove(id).then((deleteddoc)=>{
		if (id) {
			res.send('DELETED TODO IS:-'+deleteddoc)
		} else {
			res.status(404).send('ID IS NULL. CANT DELETE');
		}
	}).catch((e)=> {
		res.status(404).send('DELETED DOC NOT FOUND:-'+e);
	})
})


// FOLLOWING CODE WILL UPDATE (USE APP.PATCH) THE DOCUMENTS IN DB 

app.patch('/arytodo/:id',(req,res)=>{
	const id=req.params.id;
	// THE FOLLOWING CODE USING LODASH._pick will only GET TEXT AND COMPLETED ATTRIBUTES
	// FROM BODY OBJECT AND NOT OTHER ATTRIBUTES. THIS WONT LET USER UPDATE/CHANGE 
	// SOME IMP ATTRIBUTES LIKE
	// completedAt which should be changed only when user change the status of completed
	// attribute. Otherwise by mistake he can change the completedat attribute property
	// to some random value.
	const body=_.pick(req.body, ['text', 'completed'])
	// if completed exists and only if its being set to true by user then we will go ahead and change
	// the value of completedAt to time. _.isBoolean is a lodash method which will check whether
	// value of body.completed is true
	if (_.isBoolean(body.completed) && body.completed) {
		if (ObjectID.isValid(id)) {
			// https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
		// using set we change the attributes of our document/todo. new: true will return a new updated document
		todo.findByIdAndUpdate(id, {$set : {completedAt : new Date().toTimeString(),completed : body.completed}}, {new : true}).then((doc)=> {
			if (doc) {
				res.send(doc)
			} else {
				res.status(404).send('UPDATED DOCUMENT IS NULL')
			}
		}).catch((e)=> {
			res.status(404).send('UPDATED DOCUMENT NOT FOUND')

		})
		} else {
			res.status(404).send('INVALID OBJECT ID USED FOR UPDATE PROCESS')

		}
	}

})



app.listen(PORT,()=>{
	console.log('SERVER STARTED LISTENING AT PORT:-'+PORT);
})

