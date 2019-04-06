import React from 'react';
import DisplayOptions from './DisplayOptions';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import DisplayUsingModal from './DisplayUsingModal';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateOptionsArr = this.updateOptionsArr.bind(this);
        this.removeAllOptionsArr = this.removeAllOptionsArr.bind(this);
        this.removeOne = this.removeOne.bind(this);
        this.state = {
            title: "WebPack Indecision App",
            subtitle: "Let Computer Take Decisions for you",
            optionsArr: ['zx14r', 'interceptor'],
            showOption : undefined,
        }
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action removeAllFunc={this.removeAllOptionsArr} 
                options={this.state.optionsArr} 
                showOption={this.changeShowOption}
                />
                <AddOption options={this.updateOptionsArr} />
                <DisplayOptions options={this.state.optionsArr} removeOneFunc={this.removeOne} />
                <DisplayUsingModal 
                showOption={this.state.showOption} 
                options={this.state.optionsArr}
                delShowOption={this.delShowOption}
                />
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
        this.setState(() => {
            return {
                optionsArr: [],
            }
        })
    }

    changeShowOption=()=>{
        console.log('inside changeShowOption');
        
        this.setState((prevState) => {
            return {
                showOption: !prevState.showOption,
            }
        })
    }

    delShowOption=()=>{
        console.log('inside delShowOption');
        this.setState(() => {
            return {
                showOption: undefined,
            }
        })
    }

    removeOne(elemToBeRemoved) {
        // eslint-disable-next-line no-console
        console.log('elemToBeRemoved:-' + elemToBeRemoved);

        this.setState((prevState) => {
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.optionsArr.length != this.state.optionsArr.length) {
            console.log('componentDidUpdate in Indecision component');
            localStorage.setItem('options', JSON.stringify(this.state.optionsArr));
            console.log(localStorage.getItem('options'));
        }
    }
}