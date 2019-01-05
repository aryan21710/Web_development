
const mongoose=require('mongoose');
const todo=mongoose.model('arytodo',{
	text : {
		type : String,
		required : true,
		minlength : 1,
		trim : true
	},

	description : {
		type : String,
		required : true,
		minlength : 1,
		trim : true
	},

	completed : {
		default : false,
		type: Boolean
	},

	completedAt : {
		default : null,
		type : String
	}

});

// HERE WE ARE EXPORTING A CONSTRUCTOR SO WHILE IMPORTING WE NEED TO IMPORT THE CONSTRUCTOR
module.exports={
	todo
}

