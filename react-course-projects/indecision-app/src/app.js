class Main extends React.Component {
    constructor(props) {
        super(props);    
        // props when passed to super and constructor makes the props available to CHILD component using
        // this.props.varname.

        // state is an Object which stores the component state (variables) in form of KEY:VALUE pair.
        // state can be changed are mutable unlike props which are immutable. State should be defined in
        // same COMPONENT which needs to be changed. Props are defined in parent and passed on to child
        // if state is defined in component A then from Component b,c .. you cant access the state by
        // doing this.state.varname. To do that make the var as a props , pass it to child component then
        // from child component you can access that var as shown below in Btns component for arr props 
        // towards arr state.
        this.addOptions=this.addOptions.bind(this);
        this.randomPick=this.randomPick.bind(this);
        this.removeall=this.removeall.bind(this);
        this.removeMe=this.removeMe.bind(this);

        this.state = {
            title : 'INDECISION APP',
            subtitle: "Put Your Life hands on the Computer",
            arr: []
           
        }
    }
 // here title and subtitle are key value pairs (variables) which becomes accessible and avialable
 // via object called props. They can be reused across different components.
 
    render() {
        // HERE FOLLOWING VARIABLES ARE PROPS THEY CAN BE ACCESSED via this.props.title/subtitle
        // this.props is a predefined object which will have 2 properties called title and subtitle.   
        // This mechanism establishes One way communication between the Main Component and Other Sub
        // Components.

        // const title="INDECISION APP";
        // const subtitle="Put Your Life hands on the Computer";
        return (
            <div>
            {/* <Header /> makes an object out of Header class*/ }
            {/* MAIN IS THE PARENT COMPONENT AND HEADER BTNS AND MYFORM  ARE CHILD COMPONENTS WHICH CAN
            BE USED AS A JSX EXPRESSION. title and subtittle HERE ARE PROPS WHICH ARE PASSED ONE WAY FROM
            PARENT TO CHILD. PROPS ARE PROPERTIES WHICH ARE DEFINED IN PARENT AS KEY:VALUE PAIR AND 
            PASSED AS A VARIABLES TO THE CHILD. PROPS ARE IMMUTABLE. props title/subtitle CAN BE PASSED 
            FROM PARENT TO CHILD USING STATE IF THE VARIABLES ARE DEFINED IN STATE OBJECT. IF THEY ARE DEFINED
            LOCALLY INSIDE THIS RENDER METHOD THEN THEY SHOULD BE ACCESSED USING this.props.varname in THE CHILD
            COMPONENT.
            */}
            
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Btns options={this.randomPick} removeOptions= {this.removeall} arr={this.state.arr}/>
            {/* arr is a props that can be accessed in ListItems Component using this.props.arr
            the props can have the value locally stored in this class in render method as an object for example
             arr=[1,2,3] or you can make it a state and define it as object like we have done above*/}
                <Myform options={this.addOptions} arr={this.state.arr} removeMe={this.removeMe}/>  
            </div>
        )
    }

    addOptions(arrElem) {
        if (arrElem) {
            // THE REASON WE DIDNT PUSH ANYTHING TO PREVSTATE ARRAY IS WE SHOULD NEVER DIRECTLY CHANGE THE
            // PREVSTATE ARRAY. INSTEAD WE SHOULD EXTRACT OUR NEW ARRAY OUT OF PREVSTATE ARRAY AND THATS WHY
            // WE USE CONCAT THAT WILL DERIVE arr OUT OT prevstate and arrElem array.
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

    removeMe(arrElem) {
        console.log('argument passed:-'+arrElem);
        // arrELEM IS PASSED AS AN ARGUMENT. WE NEED TO MAKE IT UNDEFINED OR FALSE OR REMOVE IT FROM THE
        // ARRAY. USING FILTER WE ARE RETURNING FALSE WHENEVER THAT ELEMENT IS ENCOUNTERED DURIG LOOP ITERATION

        this.setState((prevState)=>{
            return {
                arr : prevState.arr.filter((elem)=> elem!==arrElem)
            }
        })
        console.log('this.state.arr after removeMe:-'+this.state.arr);

    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
            {/*THE PROPS PASSED TO HEADER COMPONENT IN PARENT COMPONENT (main) ARE USED AND ACCESSESD USING this.props.varname
            IN CHILD COMPONENT HERE.this.props.title will internally call this.state.title as shown above*/}
                <h1>{this.props.title} </h1>   
                <h2>{this.props.subtitle} </h2>             
            </div>
        )
    }
}

class Btns extends React.Component {
    render() {
        return (
            <div>
                <button disabled= {this.props.arr.length==0} 
                // here options is a props which leaves in a parent. To access it in child component we need
                // to use this.props.options which accesses the function addOptions. The addOptions in parent
                // compoennt is accessed via this.addOptions and not this.props.addOptions.
                        onClick={this.props.options}> 
                        What Should i do?
                </button> 
                {/* WE ALWAYS PASS THE FUNCTION REF HERE AND NEVER INVOKE THE FUNCTION WHILE PASSING THE FUNC
                TO AN EVENT. THE EVENT HANDLER WHICH IS removeall IS EXECUTED AS A JSX EXPRESSION AND RETURNED
                 VALUE IS PASSED TO THE EVENT*/}
                <button onClick={this.props.removeOptions}>Remove All </button>
            </div>
        )
    }
}

class Myform extends React.Component {
    constructor(props) {
        super(props);
        // HERE WE ARE DOING THIS coz subForm being an event handler an object method is not in a 
        // format of (obj.method()) when method is called without () and with some assignemt operators
        // = or === then in that case it loses the this context. Refer React One Notes for more understanding.
        // SO WE NEED TO BIND this IN ALL THE CUSTOM METHODS DEFINED BY US.
        this.subForm=this.subForm.bind(this);
        this.state= {
            errMsg:undefined,
        }
    }

    subForm(e) {
        // THE EVENT OBJECT IS INVOKED AND PASSED WHENEVER AN EVENT HAPPENS. THE FIRST ARGUMENT WILL BE ALWAYS AN EVENT OBJECT 
        // THE BELOW CODE WILL
        // PREVENT DEFAULT BEHAVIOR OF THE EVENT WHICH IS REFRESHING THE WHOLE PAGE AND CHANGING  THE
        // URL OF THE MAIN PAGE WHICH SHOULDNT BE THE CASE IN A SINGLE PAGE APP.
        e.preventDefault();
        // THATS HOW YOU GET THE VALUE OF THE INPUT ELEMENT. TRIM WILL TAKE OF THE BLANK SPACES FROM BOTH
        // THE FRONT AND BACK OF THE STRING.
        const textEntered=e.target.elements.textElm.value.trim();
        e.target.elements.textElm.value='';
    
        // console.log('making the arr blank:-'+this.props.dummy);
        // YOU CANT CHANGE THE PROPS LIKE BELOW IN THE CHILD COMPONENT. IT CAN BE DONE ONLY IN PARENT
        // OR USE STATE FOR DUMMY PROP AND THEN CHANGE IT USING SETSTATE HERE. 

        // this.props.dummy=[];
      
        
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
                <p>{this.props.dummy}</p>
                <ListItems key={this.props.arr} arr={this.props.arr} removeMe={this.props.removeMe}/>
                {this.state.errMsg && <p>{this.state.errMsg}</p> }
                 <form onSubmit={this.subForm}>
                    <input type="text" name="textElm"></input>
                    <button>Add Options</button>
                 </form>
            </div>
        )

    }

 
}


class ListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props.arr:-'+this.props.arr)
        return (
            <div>
            <ol>
            {/*since you need to access this.props.arr you need to define the constructor with the
            props object in this class*/}
                {this.props.arr.map((arrElem)=> {
                   return (
                    <div id={arrElem}>
                    <li style={{width:"200px",float:"left"}}key={arrElem}>{arrElem}</li>
                    {/* HERE THE REASON WE ARE PASSING AN ARROW FUNCTION TO onClick event handler
                    coz this.props.removeMe will pass only argument by default which is an event object 
                    e. We cant pass any other argument nor we can access that argument in the removeMe function  
                    . Thats why we are doing this hack*/}
                    <button onClick={(e)=>{
                        this.props.removeMe(arrElem)
                    }}
                    
                    >Remove Me</button>
                    </div> 

                   )        
 
                }
                )}
            </ol>
            </div>
        )
    }

}


ReactDOM.render(<Main />,document.getElementById('app'));
