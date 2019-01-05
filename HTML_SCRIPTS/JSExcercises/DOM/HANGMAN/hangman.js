Start=()=>{
    const movieNameStr='THE TERMINATOR'
    const pStyle='<li style="font-size: 50px; display inline-block;">'
    const quiz=document.getElementById('ol');
    const body=document.querySelector('body');

    let textArr=[];
    let textStr='';
    const char='_'+' ';
    let movieName=null;
    console.log(movieNameStr.includes(' '));
    if (movieNameStr.includes(' ')) {
        movieName=movieNameStr.toUpperCase().split(' ').join('').split('')
    } else {
        movieName=movieNameStr.toUpperCase().split('')
    }

    console.log('movieName is:-'+movieName);
    movieName.forEach((m)=>{
            textArr.push(char);
            textStr+=char;                       
    })

    console.log(textStr+':'+textArr);
    quiz.innerHTML=pStyle+textStr+'</li>'

    body.addEventListener('keydown',function(event){
        const key=event.key.toUpperCase();
        if (movieName.includes(key)) {
            console.log(key+' IS INCLUDED IN '+movieName);
            const index=movieName.indexOf(key);
            console.log('index OF'+ key + '@'+ index);
            movieName.forEach((m,ind)=>{
                if(ind==index) {
                    textArr.splice(ind,1,m);
                    movieName.splice(ind,1,'');
                } 
            })
            console.log('CHANGED movieName:-'+movieName);
            console.log('text:-'+textArr);
            textStr=textArr.join('');
            quiz.innerHTML=pStyle+textStr+'</li>'
        } 
    })

}
