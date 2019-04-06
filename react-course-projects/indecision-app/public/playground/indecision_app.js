
// #KEYWORDS:- [onSubmit of the form, e.preventDefault, e.target, getting the value of input=text form element]

const obj= {
    title : 'Indecision app',
    subtitle : 'Put your hands in the Life of a Computer',
    options : [],
    // BELOW CODE IS A ES6 SYNTAX FOR DEFINING METHODS WITHOUT ARROW FUNCTION
    // ITS SAME AS checkOptions = function() {}
    checkOptions() {
        return this.options.length > 0 ? 'HERE ARE YOUR OPTIONS' : 'No Options'
    },

}


const submitForm= (e)=> {
    e.preventDefault();
    console.log('e target:-'+e.target);
    console.log('e.target.elements:-'+e.target.elements)
    console.log('e.target.elements.formtext:-'+e.target.elements.formtext)
    console.log('value of the e.target.elements:-'+e.target.elements.formtext.value);
    const returnFormVal=e.target.elements.formtext.value;
    if (returnFormVal) {
        e.target.elements.formtext.value='';
        obj.options.push(returnFormVal);
        renderForm();

    }
}

const addOptions=()=> {
   return obj.options.map((option)=><li key={option}> {option} </li>)
}




const removeAll= ()=>{
    obj.options=[];
    renderForm();
}


const suggestOptions=()=> {
    const option=Math.floor(Math.random()*obj.options.length);
    alert(obj.options[option]);
}




const renderForm=()=> {
    const template= (
        <div>
            <h1> {obj.title}</h1>
            <p> {obj.subtitle} </p>
            <p> {obj.checkOptions()}</p>
            <p>{obj.options.length}</p> 
            <button disabled={obj.options.length===0} onClick={suggestOptions}>What Should I do??</button>
            <button onClick={removeAll}>Remove All</button>       
            <ol> {addOptions()}</ol>
            <form onSubmit={submitForm}>
                <input type="text" name="formtext"></input>
                <button>Submit</button>
            </form>
        </div>
    );


    ReactDOM.render(template,appRoot);
}


const appRoot=document.getElementById('app');
renderForm();
