console.log('APP JS IS RUNNING')

let count=0
const addOne= ()=> {
    count++;
    renderCounterCode();

}

const minusOne= ()=> {
    count > 0 ? count -- : count=0;
    renderCounterCode();
}


const reset= ()=> {
    count=0;
    renderCounterCode();
}

var appRoot=document.getElementById('app');


const renderCounterCode=(()=> {
    const templateTwo= (
        <div>
            <h1> Count : {count} </h1>
            <button style={{width: "100px", height : "40px"}} onClick={addOne}>+1</button>
            <button style={{width: "100px", height : "40px"}} onClick={minusOne}>-1</button>
            <button style={{width: "100px", height : "40px"}} onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(templateTwo,appRoot);

});

// const myObj= {
//     title : " InDecision App",
//     subtitle : 'GO TO GYM AT 6pm',
//     options : [1,2]
// }

// var mytemplate = (
//     <div>
//         <h1> WELCOME TO {myObj.title} REACT PRACTISE PAGE</h1>
//         <p> THIS EXERCISE IS TO COME UP WITH A BASIC JSX TEMPLATING</p>
//         {(myObj.subtitle  && <p>Subtitle:- {myObj.subtitle}</p>)}  
//         {(myObj.options.length > 0 ? <p> FOLLOWING ARE YOUR OPTIONS</p> : <p> NO OPTIONS</p>)}
//     </div>
// )

// var template=(
//     <div>
// <p> ****************************  </p>
// <h1>  JSX CONVERTED TO HTML</h1>
// <h2> PRESENTING H2 TAG BY JSX-->REACT</h2>
// <p> ****************************  </p>
// </div>
// )

// THE ABOVE jsx CODE GETS CONVERTED  BY BABEL USING REACT/ENV PRESETS INTO BELOW react CODE 
// WHICH GETS STORED UNDER SCRIPTS/app.js
// var template=React.createElement(
//     'p',
//     null,
//     'COMING FROM REACT.CREATEELEMENT'
// )

renderCounterCode();