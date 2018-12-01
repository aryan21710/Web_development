
// #KEYWORDS :- [yargs Notes, yargs.command, .demandOption]
const yargs=require('yargs');
const fs=require('fs');
const notes=require('./notes');

// argv is an Object which will be holding all the arguments passed to the script.
const argv=yargs.argv;

console.log(`argv :- ${JSON.stringify(argv,null,4)}`);
// console.log(argv._[0]+argv._[1]);

// yargs.command will enable you to add arguments to list with their aliases. demandOption when
// set to true will make the script fail if that argument not passed while running the script
// while adding a note both title and description are mandatory to pass. It will throw help option
// which will show all the arguments needed to run the script as shown below
// ^Caryan@SuperMaN$ nodemon app.js del

// argv :- {
//     "_": [
//         "del"
//     ],
//     "$0": "app.js"
// }
// app.js del

// Delete a Note

// Options:
//   --version    Show version number                                     [boolean]
//   --help       Show help                                               [boolean]
//   --title, -t  Provide Title of the Note                              [required]

// Missing required argument: title

yargs.command('add','ADD A NEW NOTE', {
	'title' : {
		alias : 't',
		describe : 'Provide Title of the Note',
		demandOption : true
	},
	'description' : {
		alias : 'd',
		describe : 'Provide Description of the Note',
		demandOption : true
	}

}).command('delete','Delete a Note', {
	'title' : {
		alias : 't',
		describe : 'Provide Title of the Note',
		demandOption : true
	}
}).command('read','Read a Note Description', {
	'title' : {
		alias : 't',
		describe : 'Provide Title of the Note',
		demandOption : true
	}
})
.help()
.argv


const command=argv._[0];
const title=argv.t||argv.title;
const description=argv.d;


switch (command) {
	case 'add' :
		let anote=notes.addNote(title,description);
		console.log(`ADDED NOTE:- ${JSON.stringify(anote,null,4)}`);
		break;
	case 'delete' :
		let dnote=notes.delNote(title);
		console.log(`DELETED NOTE:- ${JSON.stringify(dnote,null,4)}`);
		break;
	case 'list' :
		console.log('-------------------------------------');
		console.log(`LISTING ALL NOTES AS FOLLOWS`);
		let lnote=notes.listNote();
		break;
	case 'read' :
		let rnote=notes.read(title);
		if (rnote) {
			console.log(`READING NOTE:-\n\t TITLE - ${rnote.title} \n\t DESCRIPTION:- ${rnote.description}`);
		} else {
			console.log('NOTE NOT FOUND');
		}
		break;
	

}

