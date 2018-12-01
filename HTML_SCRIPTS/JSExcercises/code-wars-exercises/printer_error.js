//https://www.codewars.com/kata/56541980fa08ab47a0000040/solutions/javascript/all/clever

function printerError(s) {
	return s.match(/[^a-m]/g).length+'/'+String(s.length);
}

//OR

// function printerError(s) {
// 	var err='nopqrstuvwxyz';
// 	var num=0;
// 		for (var j=0; j < err.length; j++) {
// 				for (var i=0; i < s.length; i++) {
// 					if (err[j]==s[i]) num++;
// 				}
// 		}
// 		return `${String(num)}/${String(s.length)}`;
// }



var s='aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
// var s='aaaxbbbbyyhwawiwjjjwwm'
console.log(printerError(s));

