

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.cnt=0;
        this.addOne=this.addOne.bind(this);
        this.subOne=this.subOne.bind(this);
        this.reset = this.reset.bind(this);

    }

    addOne() {
        this.cnt++;
        console.log('addOne is called with new value:-'+this.cnt);
        this.render();
    }

    subOne() {
        (this.cnt > 0 && this.cnt--);
        console.log('subOne is called with new value:-' + this.cnt);
        this.render();

    }

    reset() {
        this.cnt=0;
        console.log('Reset is called with new value:-');
        this.render();
    }

    render() {
        const template=(
            <div>
                <p>Counter : {this.cnt}</p>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
        ReactDOM.render(template, document.getElementById('app'));
    }
}


const obj=new Counter;
obj.render();