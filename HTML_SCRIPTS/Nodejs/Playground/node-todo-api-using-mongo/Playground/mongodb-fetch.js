//#KEYWORD:- [FETCHING DATA FROM MONGODB, find.toArray, Object destructuring, new ObjectId to fetch the value of _id, Fetching a Particular document]
// const MongoClient=require('mongodb').MongoClient

// THE ABOVE LINE CAN BE REWRITTEN USING OBJECT DESTRUCTURING.
// HERE ObjectId is a constructor function so we can make an object
// out of it using new ObjectId as shown below. Since value of _id 
// looks like a string but we cant use them as a 

// ALL THE MONGODB OPERATIONS ARE PERFORMED USING MONGODB NATIVE DRIVER OR ANOTHER BETTER OPTION
// WOULD BE TO INSTALL THE NPM FOR MONGOOSE ORM

const {MongoClient,ObjectId}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{
	if (err) return console.log('NOT ABLE TO CONNECT'+err)
	const db=client.db('TodoApp');
// find will return all the documents inside the collection. Thats why we have to
// use toArray which will return PROMISE consisting of an array. Then will be used
// in promise when the promise is resolved. 


	db.collection('Users').find().toArray().then((documents)=>{
		console.log(JSON.stringify(documents,null,4));
	}).catch((err)=>{
		console.log('NOT ABLE TO FETCH THE DOCUMENT'+err);
	})


	// IF U WANT TO QUERY THE DB WITH A PARTICULAR ID INSTEAD OF RETURNING ALL DOCUMENTS.
	console.log(''.padEnd(100,'-'));

	// toArray is part of Cursor method which comes under native mongodb driver. 
	// Link:- http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html
	// Under cursor along with toArray method we have another method called
	// count

	db.collection('Users').find({
		// _id contains an object and not a string thats why we cant query like
		// _id: "5bfbc70eee5e73004deca0d6". We have to fetch the _id value
		// from ObjectId constructor function

		_id: new ObjectId("5bfbc70eee5e73004deca0d6")
	}).toArray().then((document)=>{
		console.log('USING TOARRAY CURSOR METHOD OF MONGODB NATIVE DRIVER');
		console.log(`THE DOCUMENT WITH ID FIELD  ${document[0]["_id"]} IS:- ${JSON.stringify(document,null,4)}`)

	}).catch((err)=>{
		console.log('DOCUMENT NOT FOUND'+err);
	})

})

