
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

class ImgClass {
	constructor(fileName=[1,2,3],filePath=['a','b','c']) {
		this.fileName=fileName;
		this.filePath=filePath;

	}

	imgTagCreator() {
		if (Array.isArray(this.fileName) && Array.isArray(this.filePath)) {
			if (this.fileName.length>0) {
						console.log('IMG CLASS FUNCTION IMGTAGCREATOR IS CALLED');
const options= {
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
}

JSDOM.fromFile("./FILE_UPLOAD/form_file_upload.html", options).then(dom => {
  console.log(dom.serialize());
});			// const h1=document.getElementById("demo");
				// h1.innerHTML="CHANGED BY JS1";
				// console.log(h1.innerHTML);
				// const form=document.getElementById("formId");

				// const h2="<h2> THIS IS </h2>"
				// form.innerHTML+=h2;

			}
		}

	}

}



module.exports= {
	ImgClass
}
