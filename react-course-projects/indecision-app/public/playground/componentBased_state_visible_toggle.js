class Toggle extends React.Component {
// NEED CONSTRUCTOR BECAUSE WE NEED CONSTRUCTOR TO BIND OUR CUSTOM METHODS TO THIS. ALSO
// TO DEFINE OUR STATE AND ITS VARIABLE WE NEED THE CONSTRUCTOR. WE NEED TO DO THE SAME INSIDE 
// CONSTRUCTOR SO THAT IT WILL BE ACCESSIBLE THROUGHOUT THE CLASSS 
    constructor(props) {
        super(props);
        this.toggleVisibility=this.toggleVisibility.bind(this);
        this.state = {
            visible : 1,
        }
    }

    toggleVisibility() {
        this.setState((prevState)=>{
            return {
                visible: !(prevState.visible),
            }
        })
    }
    render() {
        return (
            <div>
                <h1>VISIBILITY TOGGLE</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible==1 ? "SHOW DETAILS" : "HIDE DETAILS"}</button>
                <p>{(!this.state.visible) && ("VISIBILITY TOGGLE IS WORKING")}</p> 
            </div>
        )
    }
}


ReactDOM.render(<Toggle />,document.getElementById('app'));