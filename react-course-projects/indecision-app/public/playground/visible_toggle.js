//#KEYWORDS:- [TOGGLE BUTTON AND HIDE AND SHOW DIV BASED ON BUTTON STATUS, ternary, logical and truthy operator]
let visible=false;

const toggleVisibility=()=> {
    visible=!visible;
    renderMe();
}

const appRoot=document.getElementById('app');

const renderMe=()=>{
    const template= (
        <div>
            <h1> Visibility Toggle </h1>
            <button onClick={toggleVisibility}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && <div>
                <p> VISIBILITY TOGGLE IS WORKING </p>
            </div>}
            
        </div>
    )
    ReactDOM.render(template,appRoot);

}


renderMe();
