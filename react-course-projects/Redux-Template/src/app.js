import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import {printHeader,information} from './actions/action'
import store from './store/createStore'

store.subscribe(renderMyApp);

store.dispatch(printHeader());


class Template extends React.Component {
   
    constructor(props) {
        super(props)
        this.state= {
            subtitle: '*COVERS THE BASICS OF REDUX*'
        }
        this.fname=undefined;
        this.lname=undefined;
        this.printfName=this.printfName.bind(this);
        this.printlName = this.printlName.bind(this);

        
    }


    printfName() {
        store.dispatch(information());

        console.log('fname:-' + store.getState().fname);
        this.fname = store.getState().fname;

        console.log(this.fname)
        
    }

     printlName() {
        store.dispatch(information());

        console.log('lname:-' + store.getState().lname);
            this.lname = store.getState().lname;

            console.log(this.lname)

     }
    render() {
          return ( 
              <div>
                <Header title={this.props.title} 
                subtitle = {this.state.subtitle}
                text={store.getState().text}/>
                <h1>
                 MY INFORMATION:-
                 {
                     this.fname 
                 }
                 </h1>
                <button onClick={this.printfName}> FIRST-NAME </button> 
                <button onClick={this.printlName}> LAST-NAME </button> 
                <button>AGE</button>
              </div>
          )
    }
}


const renderMyApp= ()=> {
    return ReactDOM.render(<Template title = '*MY REDUX BASIC APP*'/> , document.getElementById('app'));
}

renderMyApp();



