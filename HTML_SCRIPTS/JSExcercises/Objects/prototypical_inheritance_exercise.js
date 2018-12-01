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

	
}

// htmlSelectElement.prototype=Object.create(htmlElement.prototype);
// htmlSelectElement.prototype.constructor=htmlSelectElement;


const e=new htmlElement();
htmlSelectElement.prototype=new htmlElement();
htmlSelectElement.prototype.constructor=htmlSelectElement;

const s=new htmlSelectElement(['1','2','3']);
// s.addItem('1');


