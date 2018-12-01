function htmlElement() {
	this.click=function() {
		console.log('click');
	}
}

htmlElement.prototype.focus=function() {
	console.log('focus');
}

function htmlSelectElement(items) {
	if (items != undefined && Array.isArray(items)) {
		this.items=items;
	} else {
		this.items=[];
	}
	this.addItem=function(arritems) {
		this.items.push(arritems)
		// console.log(`items are ${this.items}`);
	}

	this.removeItem=function(arritems) {
		if (this.items.indexOf(arritems)!=-1) this.items.splice(this.items.indexOf(arritems),1);
	}

	this.render=function() {
		let temp=''
         this.items.forEach((val)=>{
         	temp+=`\t<option>${val}</option>\n`
         })
         return `<p> THIS IS COMING THROUGHT POLYMORPHISRM SCRIPT </p>\n\n<select>\n${temp}</select>`
	}
}

function htmlImgElement(src) {
	this.src=src;
	this.render=function() {
		if (this.src) return`<img src="${this.src}" />`;
	}

}

htmlImgElement.prototype=new htmlElement();
htmlImgElement.prototype.constructor=htmlImgElement;

const e=new htmlElement();
htmlSelectElement.prototype=new htmlElement();
htmlSelectElement.prototype.constructor=htmlSelectElement;

const s=new htmlSelectElement(['1','2','3']);
const img=new htmlImgElement('file://C:/Users/aryan/Desktop/CODING/HTML_SCRIPTS/JSExcercises/Objects/red-black-spiderman.jpg');

const elements=[
	s,
	img
]

// render method is being inherited by both htmlSelectElement and htmlImgElement from their parent element
// htmlElement but they both have their own implementation (that is Polymorphism).
var demo=document.getElementById('demo');
for (let element of elements) 
	demo.innerHTML+=element.render()+document.write("<br>");



