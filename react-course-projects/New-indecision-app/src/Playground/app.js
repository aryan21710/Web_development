class IndecisionApp extends React.Component {

    render() {
        const title = "Indecision App";
        const subtitle ='Put your life in the hands of Computer';
        const o=[11,22];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options optionsArr={o}/>
                <AddOption optionsArr={o}/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle}</h2>
            </div>
        )
    }
    
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button> What should i Do??</button>
            </div>
          
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>    
                Option Component here:-{
                this.props.optionsArr.length}   
                <Option newoptionArr={this.props.optionsArr}/>
            </div>
        )
    }
}

class Option extends React.Component {

    printOptionArr(newoptionArr) {
        return newoptionArr.map((v)=><li>{v}</li>)
    }

    removeAll() {

        console.log('removeAll is called:-');
    }

    render() {
        return (
            <div>
            <ol>
                    {this.props.newoptionArr.length > 0 && this.printOptionArr(this.props.newoptionArr)}
            </ol>
            <button onClick={this.removeAll}>RemoveAllOptions</button>
            </div>
        )
    }
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption=this.addOption.bind(this);
    }
    addOption(e) {
        e.preventDefault();
        let v=e.target.elements.inputOption.value.trim();
        if (v.length > 0) {
            e.target.elements.inputOption.value = '';
            console.log('INSERT FOLLOWING INTO THE ARRAY:-' + v);
            this.props.optionsArr.push(v);
        }

        console.log('New array:-' + this.props.optionsArr);
      
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>                
                    <input name='inputOption'></input>
                    <button>Add an Option!!</button>
                </form>          
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));