const info= {
    title: 'COMPONENT LESS INDECISION APP',
    subtitle: 'FIRST REACT APP',
    options : []
}

const checkOptions=()=>{    
     return info.options.map((o)=><li>{o}</li>)
}

const populateOptions=(e)=>{
    e.preventDefault();
    let value = e.target.elements.options.value;
    info.options.push(value);
    console.log(info.options);
    e.target.value='';
    renderMe();
}

// #KEYWORDS:- [Form Submission using form Onsubmit and fetching the value submitted by using e.target.elements]

const renderMe=()=>{
    const template = (
        <div>
            {info.title && <h1>{info.title}</h1>}
            {info.subtitle ? <p>{info.subtitle}</p> : 'undefined'}
            <ol>
                {(info.options.length > 0) && (checkOptions())}
            </ol>
            <form onSubmit={populateOptions}>
                <input name='options'></input>
                <button>Submit</button>
            </form>
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'));

}

renderMe();
