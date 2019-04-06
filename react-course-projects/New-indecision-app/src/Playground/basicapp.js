
// BELOW CODE WONT WORK IF YOU RUN BY OPENING YOUR INDEX.HTML AS THE BROWSER DOESNT
// UNDERSTAND THE JSX SYNTAX. BABEL COMES TO RESCUE HERE. THERE ARE 2 WAYS TO RUN BABEL
// 1] Copy paste the below code into babeljs.io --> select presets env,react and
// Click on Try it out. It will give you React compatible code. Which you can 
// paste inside your <script src="app.js"></script>

// 2] install babel-cli and babel-preset-env and babel-preset-react and run following cli
// sudo babel src/app.js --out-file=public/scripts/app.js --presets=env,react.
// It will generate REACT compatible code and put it in public/scripts/app.js

var obj= {
    name : 'aryan',
    lname: 'sharma',
    age: 39,
    options:['a', 'b', 'c']


}

const info=()=>{
    return  `${obj.name}  ${obj.lname}  WHO IS 
     ${obj.age} ,Its his First's React Page`
}

const iterateOptions=()=>{
     return obj.options.map((v) => <p>{v}</p>)
}

var template=(
    <div>
        <h1>{info()}</h1>
        <p>HI</p>
        <ol>
            <li>ITEM ONE</li>
            <li> ITEM TWO</li>
        </ol>
        {iterateOptions()}
        {[<p>1</p>,<p>2</p>]}
    </div>
    );

ReactDOM.render(template,document.getElementById('app'));