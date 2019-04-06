
import React from 'react';

export default class DisplayOptions extends React.Component {
    constructor(props) {
        super(props);
        this.showOptions = this.showOptions.bind(this);
    }

    showOptions() {
        if (this.props.options.length > 0) {
            console.log('NEW OPTIONSARR:-' + this.props.options)

            return this.props.options.map((v) =>
                <div id='displayOption'>
                    <p>{v}</p>
                    <button onClick={(e) => {
                        this.props.removeOneFunc(v)
                    }}>RemoveME</button>
                   
                </div>
            );
        }
    }

    render() {
        return (
            <div class='container'>
                    {this.showOptions()}
            </div>
        )

    }
}


