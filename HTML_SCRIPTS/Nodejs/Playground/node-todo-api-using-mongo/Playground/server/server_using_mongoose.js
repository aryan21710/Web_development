//#KEYWORD:- [MONGOOSE USAGE,VALIDATORS]
// Mongoose is an alternative to mongodb native driver package to perform db operations using Mongofb


const mongoose=require('mongoose');

// To connect to to the db do following. provide the url which is mongodb as protocol and location where the db is 
// stored and then db name which is TodoApp.

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

// IN MONGOOSE WE NEED TO MAKE MODEL/SCHEMA TO MAKE COLLECTIONS AND DOCUMENTS INSIDE IT
// MODEL MAKES THE WHOLE THING VERY ORGANIZED. Model takes the db name and objects which will
// be in form of key:value pair. These objects will be our parameters what we want to set
// in the app.


// Here todo is a constructor from which we can create a real object.
const todo=mongoose.model('ToDo', {
	text : {
		type : String,
// VALIDATORS:-
// required, minlength, trim, default are some of important validators.
// THERE ARE TIMES WHEN THE TODO SHOULDNT BE CREATED UNLESS WITHOUT ANY MANDATORY PARAMETER PASSED
// WHICH ARE REQUIRED AT ALL TIMES WHILE CREATING THE OBJECT. THATS WHY WE HAVE AN ATTRIBUTE CALLED
// REQUIRED WHICH NEEDS TO BE SET TO EITHER TRUE/FALSE. BELOW WHEN U MAKE AN OBJECT MYTODO FROM
// todo constructor and dont pass the text argument, the script will fail with ValidationError.
		required : true,
		minlength : 1,
		trim : true
	},
	completed : {
		type: Boolean,
		default : false,
	},
	completedAt : {
		type : String,
		default : null,
	}
});


// mytodo is an object formed from the constructor todo (which is a blueprint) as shown above 

// if below mytodo is passed to save without completed and completedAt attribute it will pick up its
// value from the above todo constructor. But you need to pass text attribute as its set to required to
// be true

const mytodo=new todo({
	text : 'GO TO HDFC BANK',
	// completed : false,
	// completedAt : new Date().toDateString() + new Date().toTimeString()
})

// only mytodo object wont save the data to db.
// the .save property will save the db to the mongodb. which returns a promise.

mytodo.save().then((mydoc)=> {
	console.log('DOCUMENT CREATED:-'+mydoc);
}).catch((err)=>{
	console.log('CANT SAVE THE DOC TO THE DB:-'+err);
})




const user=mongoose.model('User',{
	user : {
		type : String
	},

	email : {
		type : String,
		require : true,
		minlength : 1,
		trim : true

	},

	// validate: ({
	// 	validator: function (val) {
	// 	return val.split('').includes('@') && val.split('').includes('.');
	// 	},
	// 	message : " SOMETHING WRONG WITH ARGUMENTS PASSED TO EMAIL AND USER"
	// })
})

const myuser=new user({
	user : 'aryan',
	email : ' aryan21710@gmailcom '
})


myuser.save().then((document)=> {
	console.log('DOCUMENT USER CREATED:-'+document);
}).catch((err)=> {
	console.log('ERROR OCCURED WHILE SAVING THE DOCUMENT TO THE DB:-'+err)
})
