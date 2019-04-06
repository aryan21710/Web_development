class Main extends React.Component {
    constructor(props) {
        super(props);    
        // state is an Object which stores the component state (variables) in form of KEY:VALUE pair.
        // state can be changed are mutable unlike props which are immutable. State will be defined in
        // same COMPONENT which needs to be changed. Props are defined in parent and passed on to child.
        // if state is defined in component A then from Component b,c .. you cant access the state by
        // doing this.state.varname. To do that make the var as a props , pass it to child component then
        // from child component you can access that var as shown below in Btns component for arr props 
        // towards arr state.
        this.addOptions=this.addOptions.bind(this);
        this.randomPick=this.randomPick.bind(this);
        this.removeall=this.removeall.bind(this);
        this.state = {
            subtitle: "Put Your Life hands on the Computer",
            arr : props.arr,
        }
    }
 // here title and subtitle are key value pairs (variables) which becomes accessible and avialable
 // via object called props. They can be reused across different components.
 // this.props will have 2 properties called title and subtitle.   
 // This mechanism establishes One way communication between the Main Component and Other Sub
 // Components.
    render() {

        // const title="INDECISION APP";
        // const subtitle="Put Your Life hands on the Computer";
        // const options=[];
        return (
            <div>
            {/* <Header /> makes an object out of Header class*/ }
            {/* MAIN IS THE PARENT COMPONENT AND HEADER BTNS AND MYFORM  ARE CHILD COMPONENTS WHICH CAN
            BE USED AS A JSX EXPRESSION. title and subtittle HERE ARE PROPS WHICH ARE PASSED ONE WAY FROM
            PARENT TO CHILD. PROPS ARE PROPERTIES WHICH ARE DEFINED IN PARENT AS KEY:VALUE PAIR AND 
            PASSED AS A VARIABLES TO THE CHILD. PROPS ARE IMMUTABLE.*/}
                <Header  subtitle={this.state.subtitle}/>
                <Btns options={this.randomPick} removeOptions= {this.removeall} arr={this.state.arr}/>
            {/* arr is a props that can be accessed in ListItems Component using this.props.arr
            the props can have the value locally stored in this class as an object for example
             arr=[1,2,3] or you can make it a state and define it as object like we have done above*/}
                <Myform options={this.addOptions} arr={this.state.arr}/>  
            </div>
        )
    }

    addOptions(arrElem) {
        if (arrElem) {
            // setState always returns the changed value of state variable. prevState is how you
            // access the old/last value of the state variable.
            this.setState((prevState)=> {
                return {
                  arr : prevState.arr.concat(arrElem),
                  }
              })
        }
    }

    randomPick() {
        alert (this.state.arr[Math.floor(Math.random()*this.state.arr.length)])
    }

    removeall() {
        this.setState(()=> {
            return {
                arr:[],
            }
        })
    }
}

// defaultProps are always defined after the end of the class/function
Main.defaultProps= {
    arr: []
}


const Header=(props)=> {
    return (
        <div>
        {/*THE PROPS PASSED TO HEADER COMPONENT IN PARENT COMPONENT (main) ARE USED AND ACCESSESD USING this.props.varname
        IN CHILD COMPONENT IF THE COMPONENT IS CLASS BASED OTHERWISE ITS ACCESSED USING props.varname.*/}
            <h1>{props.title} </h1>
        {/*IF PROPS.SUBTTITLE IS PASSED BY PARENT OR BY defaultProps then it will be visible otherwise IT 
        WONT BE VISIBLE (THIS IS HOW U SHOULD CODE)*/}
            {props.subtitle && <h2>{props.subtitle} </h2>}   
        </div>
    )

}
// Above title and subtitle both are props. title prop gets its value from defaultProps as its value is
// not passed from Parent component. subttitle prop is not passed in defaultProps but it gets its 
// value from Parent Component.
Header.defaultProps = {
    title : 'Indecision App',
}

const Btns=(props)=> {
        return (
            <div>
                <button disabled= {props.arr.length==0} 
                        onClick={props.options}> 
                        What Should i do?
                </button> 
                {/* WE ALWAYS PASS THE FUNCTION REF HERE AND NEVER INVOKE THE FUNCTION WHILE PASSING THE FUNC
                TO AN EVENT. THE EVENT HANDLER WHICH IS removeall IS EXECUTED AS A JSX EXPRESSION AND RETURNED
                 VALUE IS PASSED TO THE EVENT*/}
                <button onClick={props.removeOptions}>Remove All </button>
            </div>
        )

}



class Myform extends React.Component {
    constructor(props) {
        super(props);
        // HERE WE ARE DOING THIS AS subForm being an event handler an object method is not in a 
        // format of (obj.method()) when method is called without () and with some assignemt operators
        // = or === then in that case it loses the this context. Refer React One Notes for more understanding.
        this.subForm=this.subForm.bind(this);
        this.state= {
            errMsg:undefined,
        }
    }

    subForm(e) {
        // THE EVENT OBJECT IS INVOKED AND PASSED WHENEVER AN EVENT HAPPENS. THE BELOW CODE WILL
        // PREVENT DEFAULT BEHAVIOR OF THE EVENT WHICH IS REFRESHING THE WHOLE PAGE AND CHANGING  THE
        // URL OF THE MAIN PAGE WHICH SHOULDNT BE THE CASE IN A SINGLE PAGE APP.
        e.preventDefault();
        // THATS HOW YOU GET THE VALUE OF THE INPUT ELEMENT. TRIM WILL TAKE OF THE BLANK SPACES FROM BOTH
        // THE FRONT AND BACK OF THE STRING.
        const textEntered=e.target.elements.textElm.value.trim();
        e.target.elements.textElm.value='';
        
        if (!textEntered) {  
            this.setState(()=>{
                return {
                    errMsg: 'PLEASE ENTER A VALID OPTION',
                }
            })
        } else if (this.props.arr.indexOf(textEntered)!=-1) {
            this.setState(()=>{
                return {
                    errMsg: 'OPTION ALREADY EXISTS',
                }
            })
        } else {
            this.props.options(textEntered);
            this.setState(()=>{
                return {
                    errMsg: undefined,
                }
            })
        }
    }
    
    render() {
        console.log(this.state.errMsg);           
        return (
            <div> 
                <ListItems arr={this.props.arr} />
                {this.state.errMsg && <p>{this.state.errMsg}</p> }
                 <form onSubmit={this.subForm}>
                    <input type="text" name="textElm"></input>
                    <button>Add Options</button>
                 </form>
            </div>
        )

    }
}


const ListItems=(props)=> {
    return (
        <div>
        <ol>
            {props.arr.map((arrElem)=> <li key={arrElem}>{arrElem}</li>)}
        </ol>
        </div>
    )
}


// FOLLOWING IS THE WAY THROUGH WHICH U CAN LET THE USER CUSTOMISE THE APP BY PASSING THE DEFAULT OPTIONS
// ReactDOM.render(<Main arr={['gym', 'eat', 'work', 'rest']}/>,document.getElementById('app'));


ReactDOM.render(<Main />,document.getElementById('app'));

