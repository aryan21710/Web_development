
const util=require('util');
const fs=require('fs');
var arr=[];
var notesObj={};
var output=[];

var add=(title,description)=> {
	notesObj = {
		title: title,
		description : description,
	}

	try {
		var data=fs.readFileSync('./notes_app_data.txt')
		arr=JSON.parse(data);
	} catch (e) {
		console.log('ERROR OCCURED READING THE FILE:-'+e);
	}


	var present = arr.filter((notesObj) => {
		return notesObj["title"]==title;
	});

	if (present.length == 0) {
		arr.push(notesObj);
	} else {
		// console.log('NOTE WITH TITLE ALREADY PRESENT');
		return notesObj={};

	}

	fs.writeFileSync('./notes_app_data.txt', JSON.stringify(arr));
	return notesObj;

}

var read=(title)=> {
	var output=[];
	console.log(`NOTE WITH TITLE:-'${title}'`);
	var data=fs.readFileSync('./notes_app_data.txt')
	data=JSON.parse(data); // data is an Array of Object.
	// console.log('data:-'+JSON.stringify(data));
	output=data.filter((notesObj)=> notesObj["title"]===title);
	// THE ABOVE CODE WILL GO THROUGH THE ARRAY DATA WHICH WILL HAVE
	// OBJECTS AS ELEMENTS. IT WILL THEN MATCH OBJECT KEY WITH THE TITLE
	// PARAMETER PASSED. IF TRUE IT WILL RETURN THE ARRAY WITH OBJECT WHICH HAS MATCHING
	// PROPERTY/KEY EQUALS TO TITLE PARAMETER PASSED TO THE FUNCTION.
	if (output.length > 0) {
		console.log ('output'+JSON.stringify(output));
		return (output[0]);
	} else {
		return undefined;
	}
		
		
	
}

var list=()=> {
	var data=fs.readFileSync('./notes_app_data.txt');
	data=JSON.parse(data)
	// console.log('THE LIST OF NOTES :-'+util.inspect(data));
	return data;
}

var del=(title)=> {
	var data=fs.readFileSync('./notes_app_data.txt');
	data=JSON.parse(data)
	var index=0;

	var objToDel=data.filter((obj)=> obj['title']!==title);

	if (data.length > objToDel.length) {
		console.log(`DELETED '${title}' NOTE FROM THE APP`);
		fs.writeFileSync('./notes_app_data.txt',JSON.stringify(objToDel));
	} else {
		console.log(`CAN'T DELETE NOTE WITH TITLE ${title} AS IT WAS NOT PRESENT IN THE NOTE`);
	}

}

module.exports= {
	add:add,
	list:list,
	read:read,
	del:del
}