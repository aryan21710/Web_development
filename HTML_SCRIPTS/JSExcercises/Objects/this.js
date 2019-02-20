let thisUsage=function(name) {

    if (this==global) {
        this.name=name;
        console.log('global.name:-'+global.name);
        console.log('global.name=="sim":-' + global.name=='sim');
        return this == global // IN CASE OF RUNNING THIS PROGRAM USING NODE
    
    } else {
        this.name = name;
        console.log('this.name=="ary":-' + this.name==name);
        return this.name+this.lname
    }
} 

var name='sim';

console.log('OUTPUT OF thisUsage() WTIH PLAIN FUNCTION DEFINITION:-'+ thisUsage(name));

console.log('OUTPUT OF thisUsage() WHEN thisUsage acts a function constructor for an obj:-');

const obj=new thisUsage('ary');

console.log('CALLING THE thisUsage Function ON NEW OBJ USING CALL METHOD');
console.log(thisUsage.call({lname:'sharma'},'ryan'));
