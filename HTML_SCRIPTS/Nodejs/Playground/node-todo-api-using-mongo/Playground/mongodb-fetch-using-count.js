
//#KEYWORDS:- [update, insertmany, findOneAndDelete documents, how to fetch the id value, update operators $set or $inc]
// ALL THE MONGODB OPERATIONS ARE PERFORMED USING MONGODB NATIVE DRIVER OR ANOTHER BETTER OPTION
// WOULD BE TO INSTALL THE NPM FOR MONGOOSE ORM
const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true},(err,client)=>{

	if (err) return console.log('NOT ABLE TO CONNECT TO THE TODOAPP DB:-'+err)
	const db=client.db('TodoApp')

	// FOLLOWING CODE WILL INSERT MANY DOCUMENTS IN ONE SHOT USING INSERTMANY

	// db.collection('Users').insertMany([{
	// 	name : 'ryan',
	// 	age : 8,
	// 	weight : 20
	// }, {
	// 	name : 'aryan',
	// 	profession : 'software engineer',
	// 	weight : 80,
	// }, {
	// 	name : 'sim',
	// 	profession : 'UI designer',
	// 	weight : 58,
	// },{
	// 	name : 'sim',
	// 	profession : 'UI designer',
	// 	weight : 58,
	// },{
	// 	name : 'sim',
	// 	profession : 'UI designer',
	// 	weight : 58,
	// }],(err,results)=> {

	// 	if (err) return console.log('err occured while inserting new documents:-'+err)
	// 	console.log('NEW UPDATED USERS COLLECTIONS:-'+JSON.stringify(results.ops,null,4))
	// })


	// 1] Delete using deleteMany. In the result which is returned on the console as follows , n means
	//  no of doc delete. In case of deleteOne n will be always 1.
	// Output:-
	// DOCUMENT DELETED:-{
 	//    "n": 6,
 	//    "ok": 1
	// }
	// DOCUMENT FOUND []


	db.collection('Users').deleteMany({name:'sim'}).then((result)=>{
		console.log('DOCUMENT DELETED:-'+JSON.stringify(result,null,4))
	}).catch((err)=> {
		console.log('NOT ABLE TO DELETE THE DOCUMENT :-'+err);
	})




	// FOLLOWING CODE WILL ONLY FIND A DOCUMENT BASED ON THR QUERY PROVIDED.
	// db.collection('Users').find({name:'sim'})
	// .toArray().then((documents)=>{
	// 		 console.log('DOCUMENT FOUND '+JSON.stringify(documents,null,4)) 
	
	// }).catch((err)=>{
	// 	console.log('ERROR RETURNED WHILE FETCHING THE DB AGAINST THE OBJECTID :-'+err)
	// })

	// OR
	// 2] DELETING A PARTICULAR DOCUMENT USING FindOneAndDelete. THIS WILL RETURN THE DOCUMENT DELETED
	// THATS WHY THIS IS A PREFERRED OPTION. 

	// db.collection('Users').findOneAndDelete({name:'sim'}).then((document)=>{
	// 	console.log('DOCUMENT DELETED:-'+JSON.stringify(document,null,4))
	// }).catch((err)=> {
	// 	console.log('NOT ABLE TO DELETE THE DOCUMENT :-'+err);
	// })


	db.collection('Users').findOneAndDelete({
		_id : new Object('5c000eb0bf581400c2c8cccd')
	}).then((doc)=> {
		console.log('DOCUMENT DELETED IS:-'+JSON.stringify(doc,null,4))
	}).catch((err)=>{
		console.lof('NOT ABLE TO DELETE THE DOC:-'+err);
	})

	// UPDATING THE DOCUMENT USING findOneAndUpdate

	// set and inc are some of the update operators only through which u can perform the update operation
	// on documents. Link:- https://docs.mongodb.com/manual/reference/operator/update/inc/#up._S_inc
	db.collection('Users').findOneAndUpdate({
		name : 'ryan'
	}, {
		$set : {
			age : 8.5
		},
		$inc : {
			weight : 4,
		}
	}, {
		returnOriginal : false
	}).then((doc)=> {
		console.log('DOCUMENT UPDATED AS FOLLOWS'+ JSON.stringify(doc,null,4))
	}).catch((err)=> {
		console.log('ERROR OCCURED:-'+err)
	})
	client.close()
})