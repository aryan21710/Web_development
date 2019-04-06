
let visible=true;
const hide=()=>{
    visible=!visible;
    renderMe();
}

const renderMe=()=>{
    const template=(
    <div>
        <h1> Visibility Toggle </h1>      
            <button value='Show Details' name='btn' onClick={hide}>
            {visible?'CLICK TO HIDE DETAILS' :'CLICK TO SHOW DETAILS'}</button>
        <p>{visible && 'THIS IS A DUMMY TEXT'}</p>
    </div>
    )

    ReactDOM.render(template,document.getElementById('app'));
}

renderMe();

