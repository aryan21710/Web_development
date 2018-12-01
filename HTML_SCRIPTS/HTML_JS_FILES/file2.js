console.log('1: I AM IN FILE 2');

var st='file2:- i am private a';
console.log(st);
module.exports.st=st;
module.exports.addFunc=(a,b) => {
	return (a+b);
}