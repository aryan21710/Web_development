//#KEYWORDS:- [QUERY DB USING MONGOOSE METHODS LIKE:- find, findOne, findById, ObjectID.isValid]

const {mongoose}=require('./db/mongoose_config');
const {todo}=require('./models/todo_config');


const {ObjectID}=require('mongodb')


const id="5c0350ea6e8db10721279326";

// todo.find({_id:id}).then((doc)=>{
// 	console.log('FOUND DOC USING FIND METHOD WITH MATHCING ID:-'+doc)
// })

// todo.findOne({_id:id}).then((doc)=>{
// 	console.log('FOUND DOC USING FINDONE METHOD WITH MATHCING ID:-'+doc)
// })


if (!ObjectID.isValid(id)) console.log('NOT A VALID OBJECTID');
todo.findById(id).then((doc)=>{
	if (doc) {
	console.log('FOUND DOC USING FINDBYID METHOD WITH MATHCING ID:-'+doc)
	} else {
		console.log('DOCUMENT NOT FIND')
	}
}).catch((e)=> {
	console.log('ERROR OCCURED:-'+e)
})
