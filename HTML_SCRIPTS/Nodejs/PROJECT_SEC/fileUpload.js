const express=require('express');
const formidable=require('formidable');

const app=express();


// app.get('/',(req,res)=>{

// 		res.send('WELCOME TO / PAGE')
// })

// app.post('/upload', (req,res)=> {
// 		const form=new formidable.IncomingForm();
// 		form.parse(req, (err,fields,files)=> {
// 				console.log('PARSING THE FORM');		
// 				// res.writeHead(200 , {"Content-Type" : "text/html"})
// 				// res.write("<form action='upload' method='post' enctype='multipart/form-data'>" )
// 				// res.write("<input type='file' name='upload'></br>")
// 				// res.write("<input type='submit'>")
// 				// res.end();
// 				form.on('fileBegin',(name,file)=>{
// 					res.send('FILE BEGIN STARTED');

// 				})
// 		})
// })


app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.uploadDir = "./FILE_UPLOAD/uploads";
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.maxFields = 1000;
    form.multiples = true;
    form.parse(req,(err,fields,files)=> {
        if (err) {
            res.status(404).send('ERROR WILE PARSING THE FORM')
        } else {
            console.log(JSON.stringify(files,null,4));
        }
    });

    // form.on('fileBegin', function (name, file){
    // 	console.log(name + ':' + file);
    //     file.path = __dirname + '/uploads/' + file.name;
    // });

    // form.on('file', function (name, file){
    // 	 console.log(name + ':' + file);
    //     console.log('Uploaded ' + file.name);
    // });

    // res.sendFile(__dirname + '/index.html');
});


	


// form object will return following :-
// /upload
// {
//     "_events": {},
//     "_eventsCount": 0,
//     "error": null,
//     "ended": false,
//     "maxFields": 1000,
//     "maxFieldsSize": 20971520,
//     "maxFileSize": 209715200,
//     "keepExtensions": false,
//     "uploadDir": "/tmp",
//     "encoding": "utf-8",
//     "headers": null,
//     "type": null,
//     "hash": false,
//     "multiples": false,
//     "bytesReceived": null,
//     "bytesExpected": null,
//     "_parser": null,
//     "_flushing": 0,
//     "_fieldsSize": 0,
//     "_fileSize": 0,
//     "openedFiles": []
// }

app.listen(3000,()=>{
	console.log('SERVER STARTED AT PORT 3000 ');
})