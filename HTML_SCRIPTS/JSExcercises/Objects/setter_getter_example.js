
function wife(n,a,mood) {
         this.name = n;
         this.age = a;
         this.mood=mood;
         // profession is a private member which is not seen from outside neither the variable name nor
         // its value;
         let profession='designer'
         
     // display is a private Member not accessible to outer world (abstraction in oops)
	 let display = function () {
	 	       let id=document.getElementById('demo');
	 	       text=(`${this.name} is ${this.age} YEARS OLD BUT SHE IS MOSTLY ${this.mood} 
	 	       	. she works as ${profession}`);
	 	       let textElm=document.createTextNode(text);
	 	       id.appendChild(textElm);
               return `${text}`;
     }


     // getter function will make display accessible to outer world using this.display 
         Object.defineProperty(this, 'display', {
         	get : function() {
         		return display;
         	}
         });

         Object.defineProperty(this, 'profession', {
            set : function(value) {
                profession=value;
                return profession;
            }
         })
}



const myWife=new wife('sim',29,'hyper');
const oldWife=new wife('kutti',39,'mentally-disturbed');
console.log('BEFORE SETTER:-'+myWife.display());
//CHANGING THE VALUE OF PRIVATE MEMBER USING SETTER
oldWife.profession='engineer'
oldWife.display();
console.log('AFTER SETTER:-'+oldWife.display());

