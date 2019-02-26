const dummy=function() {
    var obj= {
        name : 'aryan',
        lname : 'sharma',
        age: 39,
        printInfo() {
            return (`${this.name} + '' ${this.lname} is ${this.age} year old now`);
        }
    }
}

const template = ()=> {
    return (
        <h1> {obj.printInfo} </h1>
    )
}

var app=document.getElementById('app');
ReactDOM.render(<template/>,app);