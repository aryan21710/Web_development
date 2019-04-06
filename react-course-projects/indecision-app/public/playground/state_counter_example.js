
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.addPlusOne=this.addPlusOne.bind(this);
        this.addMinusOne=this.addMinusOne.bind(this);
        this.Reset=this.Reset.bind(this);
        this.state = {
            count : props.count,
        };
    }

    addPlusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        });
    }

    addMinusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
    }

    Reset() {
        this.setState(()=>{
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1> Count : {this.state.count}</h1>
                <button onClick={this.addPlusOne}>+1</button>
                <button onClick={this.addMinusOne}>-1</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        );
    }
}

Header.defaultProps= {
    count : 10
}

ReactDOM.render(<Header count={-1}/>, document.getElementById('app'));