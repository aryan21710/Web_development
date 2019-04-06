// WHEN NEW TEXT IS INPUTTED, IT WONT BE DISPLAYED. FOR THAT STATE SHOULD BE USED WHICH
// RE-RENDERS DATA WHEN STATE VARIABLE CHANGES.

class IndecisionApp extends React.Component {
    render() {
        const title="New Indecision app";
        const subtitle="LET COMPUTER DECIDE WHAT YOU WANT TO DO";
        const optionsArr=[11,22];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <AddOption options={optionsArr}/>
                <DisplayOptions options={optionsArr}/>

            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.options}</h1>
            </div>
        )

    }
}



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addInput = this.addInput.bind(this);
    }

    addInput(e) {
        e.preventDefault();
        const value = e.target.elements.textInput.value;
        e.target.elements.textInput.value='';
        this.props.options.push(value);

    }

    render() {
        return (
            <div>
            <button>Remove All Options</button>
            <form onSubmit={this.addInput}>
                <input name='textInput'></input>
                <button>Add Option</button>
            </form>
            </div>
        )

    }
}

class DisplayOptions extends React.Component {
    constructor(props) {
        super(props);
        this.showOptions = this.showOptions.bind(this);
    }

    showOptions() {
        return this.props.options.map((v)=>'new'+v+':');
    }


    render() {
        return (
            <div>
                Options Array is:-{this.showOptions()}
            </div>
        )

    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));