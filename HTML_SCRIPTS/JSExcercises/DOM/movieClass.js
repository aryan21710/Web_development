// KEYWORD:- [ACCESSING VALUE OF HTML INPUT TAG USING EVENT OBJECT, USING ARROW FUNCTION TO ACCESS THIS BELONGING TO PARENT OBJECT, CHANGE AS AN EVENT PASSED TO AN EVENTLISTENER FUNCTION FOR HTML INPUT TAG,  ]
export class movieClass {
    constructor(movie) {
        this.movie=movie;
        this.matchedIndex=['dummy'];
        this.cnt=0;
    }


    addmovieToDom(movie) {
        const b=document.querySelector('body');
            this.movie=movie;
            this.cnt=0;         
            // console.log('INTIAL NOTE:-'+JSON.stringify(this.movie)+' ..matchedNote'+ matchedNote);
            this.movie.filter((note)=> {
                    const p=document.createElement('p');
                    // this.cnt++;
                    p.innerHTML=`${note.title}`;
                    b.appendChild(p);
                    // console.log('cnt:-'+this.cnt);
                })
    }




    renderDom(matchedNote='') {
        // console.log('CALLING SHOW ALL movie WITH MATCHEDNOTE:-'+matchedNote);
        if (matchedNote) {
            this.cnt=0;
            document.querySelectorAll('p').forEach((p)=>{
                // this.cnt++;
                p.innerHTML.toLowerCase().includes(matchedNote) ?   p.style.display='block' : p.remove();      
                // console.log('cnt:-'+this.cnt);
            })
        } 
    }

    hideAllParaElem(status) {
        document.querySelectorAll('p').forEach((x)=>{
            // console.log('HIDING ALL P WHEN TEXT IS ENTERED:-'+x.innerHTML);
            status=='none' ? x.style.display='none' : x.remove();
            })
    }



    filtermovie() {
        document.querySelector('INPUT').addEventListener('input',(e)=>{
            const textEntered=e.target.value;
            // console.log(''.padEnd(30,'*'));
            // console.log('textENTERED:-'+textEntered);
            if (textEntered) {
                this.movie.forEach((note)=>{
                    if (note.title.toLowerCase().includes(textEntered.toLowerCase())) {
                        // console.log('note.title is:-'+note.title+ '..which includes:-'+textEntered.toLowerCase());
                        // this.hideAllParaElem('none');
                        this.renderDom(textEntered.toLowerCase())
                    }
                })                
            } else {
                this.hideAllParaElem('remove');
                this.addmovieToDom(this.movie);
            }        
        })
    }
}