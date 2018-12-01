//#KEYWORDS :- [static, get,set]
class htmlElement {
	constructor(color,idName) {
		this.color=color;
		this.idName=idName;

	}

	static callDomElm(element) {
		console.log('CALLING STATIC FUNCTION');
		let id=document.getElementById('demo1');
		id.innerHTML+=element;
		return id.innerHTML;
	}


	get render () {
		let element=`<button type="button" style="color: red; 
		 width: 300px; height: 70px; margin: 50px; 
		 font-size: 20px; 
		">GET RENDER</button>`;
	     htmlElement.callDomElm(element)
	}

	button() {
		alert('IN BUTTON FUNCTION');
		let body=document.body
		let addBtn=document.createElement('button');
        var btnText=document.createTextNode('CHANGE COLOR');
        addBtn.style.color='red';
        addBtn.style.width='300px';
        addBtn.style.height='70px';
        addBtn.style.margin='50px';
        addBtn.style.fontSize='20px';
        addBtn.style.fontWeight='900';
        addBtn.style.fontFamily='Fjalla One';
        addBtn.style.border='4px solid black';
        addBtn.style.textAlign='center';
        addBtn.appendChild(btnText);
        addBtn.addEventListener('click', ()=> {
        	setTimeout(()=>{
				let elem=document.getElementById(this.render);
				elem.style.color=this.color;
				alert(' IN DRAW METHOD');
			},3000);

        })
        body.appendChild(addBtn);
	}



	set render(value) {
		let element=value;
		htmlElement.callDomElm(element)
	}

}

const obj=new htmlElement('red','demo');
// when u want to access render using get it will be available as a property and not as a method.
console.log('BEFORE SETTER:-'+obj.render);
value=`<button type="button" style="color: yellow; 
		 width: 300px; height: 70px; margin: 50px; 
		 font-size: 20px; 
		">SET RENDER</button>`

obj.render=value;
console.log('AFTER SETTER:-'+obj.render);



		