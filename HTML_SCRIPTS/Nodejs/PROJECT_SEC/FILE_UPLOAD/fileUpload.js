const express=require('express');
const formidable=require('formidable');
const path=require('path');
const fs=require('fs');
const app=express();
const mydir=path.join(__dirname,"/uploads");
// HERE WE ARE IMPORTING THE IMGUPLOAD.JS FILE WHICH RETURNS AN OBJECT
// THAT OBJECT HAS PROPERTY/ATTR CALLED IMGCLASS WHICH IS EXPORTED IN THE IMGUPLOAD.JS
// BELOW OBJ DESTRUCTURING WILL MAKE Class ImgClass avialable in var ImgClass.
const {ImgClass}=require('./../JS/imgUpload.js');

app.set('view-engine','hbs');


const winPath= "/C:/Users/aryan/AppData/Local/Packages/CanonicalGroupLimited.Ubuntu16.04onWindows_79rhkp1fndgsc/LocalState/rootfs/"
app.post('/fileUpload', (req, res, next)=>{
    var form = new formidable.IncomingForm();
    form.uploadDir = mydir;
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.maxFields = 1000;
    form.multiples = true;
    form.parse(req,(err,fields,files)=> {
        if (err) {
            res.status(404).send('ERROR WHILE PARSING THE FORM');
        } else {
            console.log('FILES:-'+JSON.stringify(files, null, 4 ))
            let filesArr=files[""] || files[Object.keys(files)]
            if (!Array.isArray(filesArr)) filesArr=[filesArr];
            console.log('filesArr:-'+JSON.stringify(filesArr));
            let fname=[];
            let fpath=[];
            filesArr.forEach((val)=>{
                    fname.push(val["name"]),
                    fpath.push("file://"+path.join(winPath,val["path"]))              
            })
            // fname and fpath holds the name and path of images which needs to be 
            // uploaded on the server.
            const imgObj=new ImgClass(fname,fpath);
            imgObj.imgTagCreator();
            if (fname.length > 0) {
                // res.send({
                //     "result" : "ok",
                //     "name": fname,
                //     "path": fpath
                // })
                // res.render('./imageUpload.hbs',{
                //     img : fpath,
                //     user : 'ary',
                // })
                // res.writeHead(200, {'Content-Type':'text/html'})
                // for (let i=0; i < 5; i++) {
                //     res.render('<img src="{{fpath}}">')
                // }

                // res.end();

            } 
        }
    })
});

app.get('/getFiles',(req,res)=>{
    
    fs.stat('./FILE_UPLOAD/uploads',(err,result)=> {
        if (err) {
            console.log('ERROR WHILE READING THE DIR')
        } else {
            if (result.isDirectory()) {
                fs.readdir('./FILE_UPLOAD/uploads',(err,result)=> {
                    if (err) {
                        res.status(404).send('ERROR CANT READ THE DIR'+err);
                    }
                        res.send({
                            result: "OK",
                            noOfFiles: result.length,
                            files: result
                        })
                })

            }
        }

    })
    // console.log('query'+JSON.stringify(req.query));
    // const img=req.params.img;
    // console.log('img'+img);
    // res.send(img);

})


    


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
