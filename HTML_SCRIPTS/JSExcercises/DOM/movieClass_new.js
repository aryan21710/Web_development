// KEYWORD:- [ACCESSING VALUE OF HTML INPUT TAG USING EVENT OBJECT, USING ARROW FUNCTION TO ACCESS THIS BELONGING TO PARENT OBJECT, CHANGE AS AN EVENT PASSED TO AN EVENTLISTENER FUNCTION FOR HTML INPUT TAG,  ]
export class todo {
    constructor(notes) {
        this.notes=notes;
    }


    addNotesToDom(notes) {
        const b=document.querySelector('body');
            this.notes=notes;
            // console.log('INTIAL NOTE:-'+JSON.stringify(this.notes)+' ..matchedNote'+ matchedNote);
            this.notes.filter((note)=> {
                    const p=document.createElement('p');
                    p.innerHTML=`${note.title}`;
                    b.appendChild(p);
                })
    }

    renderDom(matchedNote='') {
        // console.log('CALLING SHOW ALL NOTES WITH MATCHEDNOTE:-'+matchedNote);
        if (matchedNote) {
            document.querySelectorAll('p').forEach((p)=>{
                p.innerHTML.toLowerCase().includes(matchedNote) ?   p.style.display='block' : ''       
            })
        } 
    }

    hideAllParaElem(status) {
        document.querySelectorAll('p').forEach((x)=>{
            console.log('HIDING ALL P WHEN TEXT IS ENTERED:-'+x.innerHTML);
            status=='none' ? x.style.display='none' : x.style.display='block'
            })
    }



    filterNotes() {
        document.querySelector('INPUT').addEventListener('input',(e)=>{
            const textEntered=e.target.value;
            console.log('textENTERED:-'+textEntered);
            if (textEntered) {
                this.notes.forEach((note)=>{
                    if (note.title.toLowerCase().includes(textEntered.toLowerCase())) {
                        console.log('note.title is:-'+note.title+ '..which includes:-'+textEntered.toLowerCase());
                        this.hideAllParaElem('none');
                        this.renderDom(textEntered.toLowerCase())
                    }
                })                
            } else {
                this.hideAllParaElem('block');
                this.renderDom(this.notes);
            }        
        })
    }
}