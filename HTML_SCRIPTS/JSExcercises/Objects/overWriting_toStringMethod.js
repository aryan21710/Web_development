// #KEYWORDS:- [ OVERWRITE THE DEFAULT toString() method];

function add(a) {
    this.a=a;   
}
add.prototype.toString = function () {
    return this.a.toUpperCase()+this.a.toLowerCase();
}


var x=new add('seema');
console.log(x.toString());