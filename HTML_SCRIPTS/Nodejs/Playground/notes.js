
// #KEYWORDS:- [Object.prototype.toString, arr.forEach, JSON.parse, arr.filter]
const fs=require('fs');
let arr=[];


listNote=()=> {
	// fs.readFileSync returns buffer if no encoding is specified. Otherwise it
	// returns a string {data var as shown below) if utf=8 encoding is passed.
	let data=fs.readFileSync('./Notesdata.json','utf-8');
	// arr becomes an object it will have {} not [{}] since we didnt push into it.
	arr=JSON.parse(data);
	arr.forEach((val)=>{
		console.log(`TITLE:- ${val['title']}`);
		console.log(`DESCRIPTION:- ${val['description']}`);
	})

}

read=(title)=>{
	let data=fs.readFileSync('./Notesdata.json','utf-8');
	arr=JSON.parse(data);
	var found=arr.filter((obj)=>{
		return (obj["title"]==title);
	})


	if (found) return found[0];
	return {};
	
}


delNote=(title)=>{
		let data=fs.readFileSync('./Notesdata.json','utf-8');
		let found={};
		arr=JSON.parse(data)
		for (let i=0; i < arr.length; i++) {
			if (arr[i]['title']==title) {
				console.log(arr[i]['title']);
				let dnote=arr[i]
				arr.splice(i,1);
				fs.writeFileSync('./Notesdata.json', JSON.stringify(arr,null,4));
				found=dnote;
				break;
			} 
		}
		return found;
}

addNote=(title,description)=>{
		
	// 	console.log(`IN ADD NOTE. TITLE:- ${title} AND DESCRIPTION ${description}`);
		let noteObj={"title":title,"description": description};
		// Object.prototype.toString=function() {
  //   		return {title:this.title, description : this.description};
		// }	

		// console.log('BEFORE READ:'+arr);
	
		try {
			// 	IF DATA IS NOT BLANK WHICH MEANS FILE IS NOT EMPTY.DONT PUSH THE CONTENTS
			// OF FILE INTO AN ARRAY. JUST MAKE DATA WHICH IS OF OBJECT TYPE == ARRAY.
			// IF U PUSH DATA INTO AN ARRAY THEN IN THE NEXT ITERATION, ARR WILL BECOME
			// 2D ARRAY THEN IN NEXT ITERAION IT WILL BECOME 3D ARRAY.
			const data=fs.readFileSync('./Notesdata.json');
			arr=JSON.parse(data);

		} catch (e) {
			// IF DATA IS EMPTY WHICH MEANS FILE IS EMPTY. IT WONT THROW CRASH THE PROGRAM.
			// IT WILL THROW ERROR e
			console.log('NOT ABLE TO READ FILE COZ'+e);
		}
	

		// IF ARR HAS AN OBJECT VAL WITH TITLE PROPERTY == TITLE PASSED TO ADDNOTE
		// THEN IT WILL RETURN THAT OBJECT ONLY. 
		// FOUND WILL BE AN OBJECT HERE SINCE WE ARE RETURNING AN OBJECT IN ARR.FILTER 
		// AFTER THIS STILL WE NEED TO ADD NEW NOTEOBJ IF ITS NOT ALREADY PRESENT IN ARR.
		let found=arr.filter((val)=>{
			return (val.title==title);
		})

		console.log('found:-'+JSON.stringify(found));

		// FOUND LENGTH == 0 IT MEANS THERE IS NOTHING IN FOUND (NO DUPLICATE PROPERTY)
		// THEN PUSH NOTEOBJ IN ARR. YOU ALSO HAVE TO RETURN THE NOTE ADDED IN 1ST CASE TI
		// WILL BE NOTEOBJ IF FOUND.LENGTH IS !=0 WHICH MEANS IT ALREADY HAS A NOTE/OBJECT
		// IN IT. IT WILL RETURN A BLANK NOTE.
		if (found.length==0 || !found) {
			arr.push(noteObj);
		} else {
			noteObj={};
		}
		
		// let found=false;
		// arr.forEach((val)=>{
		// 	if (val["title"]==title) {
		// 		return (found=true);
		// 	}		
		// })
		// if (!found) arr.push(noteObj);	
		console.log(JSON.stringify(arr,null,4));
		fs.writeFileSync('./Notesdata.json', JSON.stringify(arr));
		return noteObj;

}


module.exports = {
	addNote,
	listNote,
	delNote,
	read
}