

var info = {
    title : 'THIS IS A TITLE',
    subtitle : ' THIS IS A SUBTITLE',
    options:['Op1','Op2']
}

var renderMe=(
    <div>
        {info.title && <h1>{info.title}</h1>}
        {info.options.length > 0 ? <p>Options exists</p> : 
        <p>No options present</p>}
    </div>
);
   

ReactDOM.render(renderMe,document.getElementById('app'));