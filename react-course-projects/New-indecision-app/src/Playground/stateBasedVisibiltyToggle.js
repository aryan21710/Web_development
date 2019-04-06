
class Visible extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visiibility : 1,

        }
    }

    toggle() {
        console.log('TOGGLE IS CALLED');
        this.setState((prevState)=>{
            return {
                visiibility: !prevState.visiibility,
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>
                Click to {this.state.visiibility == 1 ? "SHOW" : "HIDE"} Details
                </button>
                <p> {this.state.visiibility==1 ? "HERE I AM " : undefined}</p>
            </div>
        )
    }

}

ReactDOM.render(<Visible/>, document.getElementById('app'));


