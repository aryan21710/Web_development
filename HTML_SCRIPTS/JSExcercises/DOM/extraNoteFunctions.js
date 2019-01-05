class spareNotesFunction {
        filterNotes1() {
        console.log('CREATPARA IS CALLED')
        const b=document.querySelector('body');
        const taskLeft=this.notes.filter((note)=>{
            return !note.completed;
        })

        const h3=document.createElement('h3');
        h3.innerHTML=`YOU HAVE ${Object.keys(taskLeft).length} TASK LEFT AS SHOWN BELOW`;
        b.insertBefore(h3,document.querySelector('button'));

        taskLeft.forEach((t)=>{
            const p=document.createElement('p');
            p.innerHTML=`TITLE:- ${t.title} <br> COMPLETED:-${t.completed}`;
            b.insertBefore(p,document.querySelector('button'));
        })
        }

        addNote() {
        document.querySelector('button').addEventListener('click',()=> {
            const inputText=document.createElement('p');
            inputText.style.color="red";
            inputText.style.fontSize="20px";
            inputText.innerHTML=this.text;
            document.querySelector('INPUT').value='';
            document.querySelector('body').insertBefore(inputText,document.querySelector('INPUT'));
        })
        }

        getUserInputText() {
        document.querySelector('INPUT').addEventListener('change',(e)=>{ 
            this.text=e.target.value;
            const inputText=document.createElement('p');
            inputText.style.color="red";
            inputText.style.fontSize="20px";
            inputText.innerHTML=this.text;
            document.querySelector('INPUT').value='';
            document.querySelector('body').insertBefore(inputText,document.querySelector('INPUT'));
        })
                   
        }


        searchNotes(notes,matchNote={}) {
    console.log('INSIDE SHOWALLNOTES MATCHTEXT:-'+JSON.stringify(matchNote));
    this.matchNote.forEach((note, ind)=>{
        console.log('MATCHNOTE AT INDEX'+ind+ '..CONTAINS :-'+note.title);
        let allPElem=Array.from(document.querySelectorAll('p'));
        allPElem.forEach((x,ind)=>{   
            // x.style.display='none';
            x.innerHTML.toLowerCase().includes(note.title.toLowerCase()) ? 
                console.log(' x.innerHTML is:-'+  x.innerHTML + '..which includes:-'+note.title.toLowerCase())
                : ''
            if (!x.innerHTML.includes(note.title)) {
                console.log('REMOVING:-'+x.innerHTML);
                x.remove();
            } 
        })
    })

        }

        renderDom1(matchedNote='') {
            // console.log('CALLING SHOW ALL movie WITH MATCHEDNOTE:-'+matchedNote);
            if (matchedNote) {
                    this.matchedIndex.forEach((m,indO)=>{
                        this.cnt++;
                        console.log('iteration:-'+this.cnt);
                        console.log('MATCHED INDEX ARR:-'+this.matchedIndex);
                        document.querySelectorAll('p').forEach((p,ind)=>{
                            console.log('m:-'+m +' and ind:-'+ind);
                             if (!this.matchedIndex.includes(ind)) {
                                console.log('PROCESSING INDEX NO:-'+ind);
    
                                if (p.innerHTML.toLowerCase().includes(matchedNote)) {
                                    p.style.display='block';
                                }  else {
                                    console.log('HIDING:-'+p.innerHTML+' WHEN :-'+ matchedNote+ ' ENTERED AT INDEX:-'+ind);
                                    p.style.display='none';
                                    this.matchedIndex.includes(ind) ? '' :  this.matchedIndex.push(ind) 
                                }
    
                            }
                        
                        })
                    
                    // p.innerHTML.toLowerCase().includes(matchedNote) ?   p.style.display='block' :  p.style.display='none'
                    
                })
            } 
        }
}