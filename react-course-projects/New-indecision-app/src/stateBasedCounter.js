

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subOne = this.subOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            cnt:0,
        }

    }

    addOne() {
        console.log('addOne is called with new value:-' + this.state.cnt);

        this.setState((prevState)=>{
            return {
                cnt: prevState.cnt+1,
            }

        })
    }

    subOne() {
        
        this.setState((prevState) => {        
            return (prevState.cnt > 0 && 
             {
                cnt: prevState.cnt - 1,
            })
        })
        console.log('subOne is called with new value:-' );

    }

    reset() {
        this.setState((prevState) => {
            return {
                cnt: 0,
            }

        })
        console.log('Reset is called with new value:-');
    }

    render() {
      return (
            <div>
                <p>Counter : {this.state.cnt}</p>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));
