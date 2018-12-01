// #KKEYWORD:- [EXPLANATION OF WHOLE MONGODB, mongodb package link and inf]
// THE MONGODB LIBRARY HAS A MONGODB CLIENT WHICH WE NEEDS ACCESS TO, TO DO DB OPERATION

// ALL THE MONGODB OPERATIONS ARE PERFORMED USING MONGODB NATIVE DRIVER OR ANOTHER BETTER OPTION
// WOULD BE TO INSTALL THE NPM FOR MONGOOSE ORM

// LINK TO mongodb package:- http://mongodb.github.io/node-mongodb-native/3.1/api/
const MongoClient = require('mongodb').MongoClient
// TO CONNECT TO THE DB WE NEED TO USE CONNECT OPERATION
// IT TAKES 2 ARG. FIRST ONE IS A URL WHERE UR DB RESIDES IT CAN BE A AMAZON WEB SERVER OR A NORMAL SERVER
// OR YOUR LOCAL MACHINE or HEROKU URL.
// THE 2ND ARG IS A CALLBACK FUNC WHICH GETS INVOKED ONLY
// WHEN THE CONNECT PASSES OR FAILS.
// the mongodb://localhost:27017 is OUR LOCAL MACHINE MONGODB DB
// THE PORT 27017 COMES WHILE INSTALLING THE MONGODB ON UR MACHINE
// the TodoApp is the new Collection (table in sql) TO WHICH YOU NEED TO 
// CONNECT TO. IF NOT PRESENT IT WILL CREATE A NEW ONE.
// client ARG IN THE callback func WILL BE THE VARIABLE THROUGH WHICH WE WILL GET ACCESS TO DB VAR ON WHICH WE WILL BE PERFORMING ALL THE OPERATION
// ERR IS WHEN ERROR OCCURS TO CONNECT TO THE DB.

// ONCE WE CONNECT TO THE NEW DB TODOAPP. IT WONT BE VISIBLE IN THE ROBOMONGO GUI AS MONGO WONT CREATE A DB
// UNTIL U ADD DATA TO THE DB.MongoDB waits until you have created a collection (table), 
// with at least one document (record) before it actually creates the database (and collection).
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

	if (err) return console.log ('NOT ABLE TO CONNECT TO THE DB SERVER')
	console.log('CONNECTED TO THE DB SERVER')
	// DB IS THE VAR WHICH WE WILL BE NEEDING NOT CLIENT TO ADD/DELETE/VIEW COLLECTION/DOCUMENT
	const db=client.db('TodoApp')


	// THIS IS HOW U ADD DATA TO THE DB USING INSERTONE OPERATION. IF U WANT TO INSERT MULTIPLE OBJ USE INSERTMANY.
	// INSERTONE HAS ONE MORE ARG
	// CALLBACK FUNC INSIDE WHICH WE SEE THE CONTENTS OF THE DOCUMENT. THIS ONLY U DO IN A CALLBACK FUNC WHEN ERROR IS NOT THROWN.
	// HERE U ARE ADDING A NEW COLLECTION (TABLE) INSIDE WHICH U ARE ADDING NEW DOCUMENTS (ROW/RECORDS)
	// WHICH IS AN OBJ. AFTER ADDING INSERTONE TAKES ONE MORE CALLBACK ARG TO PERFORM SOME OPERATION
	// ON THE DOCUMENT ADDED.
	db.collection('Todos').insertOne({
		text: 'MEET LAWYER TODAY',
		dateAdded : `${new Date().toTimeString()}`,
		completed : false 

	}, (err,result)=> {
		if (err) return console.log ('NOT ABLE TO ADD DOCUMENT TO COLLECTION Todos'+err)
		// RESULT.OPS WILL SHOW U THE ENTIRE DOCUMENT. RESULT WILL ONLY PRINT STATUS OK WHEN
		// THE OPERATION IS SUCCESSFUL.
		console.log(JSON.stringify(result.ops,null,4));
	})

	// hierarchy will be TodoApp (db)--> collections(users/todos)--> documents(using insertone)
	db.collection('Users').insertMany([{
		name : 'sim',
		age : 28,
		location : 'bengaluru'
	},{
		name : 'ary',
		age : 39,
		location : 'bengaluru'
	}],(err,results)=>{
		if (err) return console.log('NOT ABLE TO ADD DOCUMENT TO THE COLLECTION'+err)

		console.log(JSON.stringify(results.ops,null,4))

	// Object id which is part of every document created by Mongodb is unique identifier. It contains
	// timestamp, machine id and some other useful info. We can fetch the timestamp which is nothing but
	// the time during which the document was created.
		console.log(`Document was created @ :- ${results.ops[0]._id.getTimestamp() }`)
	})

	client.close();

});


