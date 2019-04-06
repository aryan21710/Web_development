// WHEN NEW TEXT IS ENTERED INSIDE A INPUT TEXT, IT WONT BE DISPLAYED.
// FOR THAT STATE SHOULD BE USED WHICH RE-RENDERS DATA WHEN STATE VARIABLE CHANGES.

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateOptionsArr=this.updateOptionsArr.bind(this);
        this.removeAllOptionsArr = this.removeAllOptionsArr.bind(this);
        this.removeOne=this.removeOne.bind(this);
        this.state = {
            title:"New Indecision App",
            subtitle: "Let Computer Take Decisions for you",
            optionsArr: ['zx14r', 'interceptor'],
        }
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action removeAllFunc={this.removeAllOptionsArr} options={this.state.optionsArr}/>
                <AddOption options={this.updateOptionsArr} />
                <DisplayOptions options={this.state.optionsArr} removeOneFunc={this.removeOne}/>
            </div>
        )
    }

    updateOptionsArr(value) {
        this.setState((prevState) => {
            return {
                optionsArr: prevState.optionsArr.concat(value),
            }
        })
    }

    removeAllOptionsArr() {
        this.setState(()=>{
            return {
                optionsArr: [],
            }
        })
    }

    removeOne(elemToBeRemoved) {
        // eslint-disable-next-line no-console
        console.log('elemToBeRemoved:-' + elemToBeRemoved);

        this.setState((prevState)=>{
            return {
                optionsArr: prevState.optionsArr.filter((v) => v != elemToBeRemoved),                
                }
            })
    }

    componentWillMount() {
        if (localStorage.getItem('options')) {
            const obj = JSON.parse(localStorage.getItem('options'));
            console.log('componentWillMount:-' + obj);
            this.setState(() => {
                return {
                    optionsArr: obj,
                }
            })

        }
     
    }

    componentDidUpdate(prevProps,prevState) {
        if (prevState.optionsArr.length != this.state.optionsArr.length) {
            console.log('componentDidUpdate in Indecision component');
            localStorage.setItem('options', JSON.stringify(this.state.optionsArr));
            console.log(localStorage.getItem('options'));
        } 
    }
}



const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )

}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.randomOption=this.randomOption.bind(this);
    }
    randomOption() {   
        alert(this.props.options[Math.floor(Math.random() * (this.props.options.length - 0) + 0)]);
    }

    render() {
        return (
            <div>
                <button disabled={this.props.options.length == 0} onClick={this.randomOption}>Select an Option for Me</button>
                <button onClick={this.props.removeAllFunc}>Remove All Options</button>     
            </div>
        )

    }
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addInput = this.addInput.bind(this);
        this.state={
            errMsg: undefined,
        }
    }


    addInput(e) {
        e.preventDefault();
        let value = e.target.elements.textInput.value;
        e.target.elements.textInput.value = '';
        if (value.length > 0) {
            value=value.trim();
            this.props.options(value);
            this.setState(() => {
                return {
                    errMsg: undefined,
                }
            })
        } else {
            this.setState(()=>{
                return {
                    errMsg: true,
                }
            })
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addInput}>
                    <p>{this.state.errMsg && 'PLEASE ENTER A VALID OPTION'}</p>
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
        if (this.props.options.length > 0) {
            console.log('NEW OPTIONSARR:-' + this.props.options)

            return this.props.options.map((v) =>          
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <li>{v}</li> 
                <button  onClick={(e)=>{
                        this.props.removeOneFunc(v)
                }}>RemoveME</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <ol style={{listStyleType:'circle'}}>
                    {this.showOptions()}
                </ol> 

            </div>
        )

    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));