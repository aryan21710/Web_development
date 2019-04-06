const info= {
    title: 'COMPONENT LESS INDECISION APP',
    subtitle: 'THIS WILL DECIDE ON UR BEHALF',
    options : []
}

const checkOptions=()=>{    
     return info.options.map((o)=><li>{o}</li>)
}

const populateOptions=(e)=>{
    e.preventDefault();
    let value = e.target.elements.options.value.toUpperCase();
    if (value.length > 0) {
        info.options.push(value);
        console.log(info.options);
        e.target.elements.options.value = '';
        renderMe();
    }
}


const removeall=()=>{
    info.options=[]
    renderMe();
}
// #KEYWORDS:- [Form Submission using form Onsubmit and fetching the value submitted by using e.target.elements]


const pickRandOption=()=>{
    if (info.options.length > 0) {
        let random=info.options[Math.floor(Math.random() * info.options.length)];
        console.log(`DO FIRST:-${random}`);
        const newOptions=info.options.filter((v)=>v==random);
        console.log('newOptions:-'+newOptions);
        info.options=newOptions;
        renderMe();

    }
}
const renderMe=()=>{
    const template = (
        <div>
            {info.title && <h1>{info.title}</h1>}
            {info.subtitle ? <h2>{info.subtitle}</h2> : 'undefined'}
            {(info.options.length > 0) && <p> Here Are Your Options: {info.options.length}</p>}
            <button onClick={removeall}>RemoveAll</button>
            <ol>
                {(info.options.length > 0) && (checkOptions())}
            </ol>
            <form onSubmit={populateOptions}>
                <input name='options'></input>
                <button>Add Option</button>
            </form>
            <button disabled={info.options.length == 0} style={{ margin: "20px 0px 20px 0px" }} onClick={pickRandOption}>
                What Should I Do??</button>
          
        </div>
    )

    ReactDOM.render(template, document.getElementById('app'));

}

renderMe();
