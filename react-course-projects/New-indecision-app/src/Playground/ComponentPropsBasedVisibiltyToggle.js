
class Visible extends React.Component {

    constructor(props) {
        super(props);
        this.visiibility = 'I SHOULD TOGGLE NOW';
        this.toggle=this.toggle.bind(this);
    }

    toggle() {
        console.log(' TOGGLE IS CALLED');
        this.visiibility = !this.visiibility;
        this.visiibility=this.visiibility == true ? 'I SHOULD TOGGLE NOW' : undefined;
        this.render()

    }

    render() {
        const template= (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>Click to Hide Details</button>
                <p> {this.visiibility}</p>
            </div>
        )
        ReactDOM.render(template, document.getElementById('app'));
    }

}

const obj=new Visible;
obj.render();

