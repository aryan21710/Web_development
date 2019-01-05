
class HangmanClass {
    constructor(movienameStr,move=0,shape=['circle','line','line','line','line','line']) {
        this.movienameStr=movienameStr;
        this.move=move;
        this.shapeArr=shape;
        this.shape=null;
    }


    static parseMovieName(movienameStr) {
        let textArr=[];
        let textStr='';
        const char='_'+' ';
        let movieName=null;
        console.log('INSIDE STATIC:-'+movienameStr)
        movieName=movienameStr.toUpperCase().split('')
        console.log('movieName is:-'+movieName);
        movieName.forEach((m)=>{
            if (m!=' ') {
                textArr.push(char);
                textStr+=char;                       
            } else {
                textArr.push('&nbsp&nbsp');
                textStr+='&nbsp&nbsp';
            }
        })
    
        console.log(textStr+':'+textArr);
        return {textStr,movieName,textArr};
    }

    start(){

        let quiz=document.getElementById('ol');
        let body=document.querySelector('body');
        const pStyle='<li>'
        let {textStr,movieName,textArr}=HangmanClass.parseMovieName(this.movienameStr);
        quiz.innerHTML=pStyle+textStr+'</li>'
        console.log('INSIDE STATIC:-'+this.movienameStr);
        // console.log('move:-'+this.move);
        let keyDwnFunc=((event)=>{
            console.log('move:-'+this.move);
            const key=event.key.toUpperCase();
            if (movieName.includes(key)) {
                this.move--;
                console.log(key+' IS INCLUDED IN '+movieName);
                const index=movieName.indexOf(key);
                console.log('index OF'+ key + '@'+ index);
                console.log('befor textStr:-'+textStr);
                movieName.forEach((m,ind)=>{
                    if(ind==index) {
                        textArr.splice(ind,1,m);
                        movieName.splice(ind,1,'');
                    } 
                })
                console.log('CHANGED movieName:-'+movieName);
                console.log('textArr:-'+textArr);
                textStr=textArr.join('');
                console.log('after textStr:-'+textStr);
                console.log(pStyle+textStr+'</li>');
                quiz.innerHTML=pStyle+textStr+'</li>'
            } else {
                if(this.shapeArr.length>0) {
                    this.shape=this.shapeArr.shift();
                    this.animation(this.shape,this.shapeArr.length);

                } else {
                    console.log('NO OF CHANCES ARE EXHAUSTED...REMOVING EVENT LISTENER KEYDOWN ')
                    body.removeEventListener('keydown',keyDwnFunc);
                }
            }
        })

        body.addEventListener('keydown',keyDwnFunc)

        
    }

    animation(shape=this.shape,whichShape=this.shapeArr.length) {
        console.log('shape now:-'+shape+' WHICHSHAPE:-'+whichShape);
        let mycanvas=document.getElementById('myCanvas');
        let ctx = mycanvas.getContext("2d");
        if(!shape) {
        ctx.lineWidth=10;
        ctx.moveTo(10, 0);
        ctx.lineTo(10, 570);

        ctx.moveTo(0,570);
        ctx.lineTo(180, 570);

        ctx.moveTo(10,0);
        ctx.lineTo(100,0);

        ctx.moveTo(100,0);
        ctx.lineTo(100,80);

        ctx.stroke();
        }
        if (shape=='circle') {
            ctx.beginPath();
            ctx.arc(100, 120, 40, 0, 2 * Math.PI);
            ctx.stroke();
            console.log('circle');

        } else if(shape=='line') {
            if(whichShape==4) {
                ctx.moveTo(100,160);
                ctx.lineTo(100,400);
                ctx.stroke();
                console.log('line1');
            } else if (whichShape==3) {
                ctx.moveTo(100,400);
                ctx.lineTo(60,500);
                ctx.stroke();
                console.log('line2');
            } else if (whichShape==2){
                ctx.moveTo(100,400);
                ctx.lineTo(140,500);
                ctx.stroke();
                console.log('line2');
            } else if (whichShape==1) {
                ctx.moveTo(100,250);
                ctx.lineTo(50,250);
                ctx.stroke();
                console.log('line1');

            } else {
                ctx.moveTo(100,250);
                ctx.lineTo(150,250);
                ctx.stroke();
                let score=document.getElementById('ScoreArea');
                score.innerHTML="YOU LOST...TRY AGAIN"
            }

        } 

    }
}

const hangman=new HangmanClass('THE RISE OF APES');
