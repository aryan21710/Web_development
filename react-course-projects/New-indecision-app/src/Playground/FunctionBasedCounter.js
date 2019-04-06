
let data= {
    counter: 0,
}


let add=()=>{
    console.log(`add is called with ${data.counter} value`);
    (data.counter>=0) && data.counter++;
    renderMe();
}


let sub = () => {
    console.log(`sub is called with ${data.counter} value`);
    (data.counter > 0) && data.counter--;
    renderMe();
}

let reset = () => {
    console.log(`reset is called with ${data.counter} value`);
    (data.counter) && (data.counter=0);
    renderMe();
}

// #KEYWORDS :- [Rerendering the app using ReactDOM]

const renderMe=()=>{
    let template = (
        <div>
            <h1 id='count'> Count : {data.counter}</h1>
            <button onClick={add}>+1</button>
            <button onClick={sub}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(template, document.getElementById('app'));
}

renderMe();


