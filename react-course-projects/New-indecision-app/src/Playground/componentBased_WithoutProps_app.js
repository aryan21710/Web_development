class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Option />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> Indecision App </h1>
                <h2> Put your life in the hands of Computer</h2>
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

class Option extends React.Component {
    getOptions() {
        let options = ['item1', 'item2', 'item3']
        return options.map((v) => <li>{v}</li>)
    }
    render() {
        return (
            <div>
                <ol>
                    {this.getOptions()}
                </ol>
                <br></br>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input></input>
                <button>Add an Option!!</button>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));