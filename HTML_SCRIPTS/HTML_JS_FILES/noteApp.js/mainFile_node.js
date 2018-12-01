

const myFunc=require('./function_file_node.js')
const yargs=require('yargs');
const util=require('util');

console.log('YARGS ARGV:-'+util.inspect(yargs.argv));
const operation=yargs.argv._;
const titleObj = {
		describe: 'title of the file',
		demand: 'true',
		alias: 't'
	}
const argv= yargs
.command('add', 'ADD A NOTE TO A FILE', {
	title : titleObj,
	description: {
		describe: ' Description of the Note',
		alias: 'desc',
		demand:'true'
	}
})
.command('delete','DELETE A NOTE FROM THE FILE', {
	title : titleObj
})
.command('read','READING A NOTE DESCRIPTION', {
	title : titleObj
})
.command('list','LIST ALL NOTES', {
	
})
.help()
.argv;


console.log(`OPERATION TO BE PERFORMED:- ${operation}`);
// console.log('title:-'+argv.title);

if (operation=='add') {
	var note=myFunc.add(argv.title, argv.description);

	if (note["title"]!=undefined) {
		console.log('ADDED NOTE');
		// console.log('NOTE:-'+JSON.stringify(note));
		console.log('TITLE:-'+note["title"]);
		console.log('DESCRIPTION:-'+note["description"]);
	} else {
		console.log('NOTE WITH TITLE ALREADY PRESENT');
		// console.log('NOTE:-'+note);
	}
 } else if (operation=='list') {
	var listNote=myFunc.list();
	// console.log(Object.keys(listNote)+':'+JSON.stringify(listNote));
	console.log('________________________________');
	console.log('THE LIST OF NOTES ARE AS FOLLOWS')
	listNote.forEach((val)=> {
		console.log('TITLE:-'+val['title']);
		console.log('DESCRIPTION:-'+val['description']);


	});

} else if (operation=='delete') {
	myFunc.del(argv.title);
} else if (operation=='read') {
	var readNote=myFunc.read(argv.title);
	// console.log('readNote:-'+readNote);
	
	if (readNote!=undefined) {
		console.log('________________________________');
		console.log('NOTE FOUND:-');
		console.log('TITLE:-'+readNote['title']);
		console.log('DESCRIPTION:-'+readNote['description']);
	} else {
		console.log('NOTE NOT PRESENT IN THE LIST TO READ');	
	}
    
} else {
	console.log('OPERATION NOT SUPPORTED');
}
