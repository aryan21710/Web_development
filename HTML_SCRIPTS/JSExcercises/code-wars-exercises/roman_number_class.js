
class Roman{

	constructor() {
	}

	static mapping() {
		const mapObj = {
			'I':	1,
			'IV':	4,
			'V':	5,
			'IX':	9,
			'X':	10,
			'XL':	40,
			'L':	50,
			'XC':	90,
			'C':	100,
			'CD':	400,
			'D':	500,
			'CM':	900,
			'M':	1000,

		} 
		const mapObj1={};
		let j='';
		for (var i in mapObj) {
			j=Number(mapObj[i]);
			mapObj1[j]=i;
		}
		return Object.assign({},mapObj,mapObj1);
	}

	


	fromRoman(inp) {
		var mapObj=Roman.mapping();
		var num=0;
		var i=1;
		if (inp.length > 1) {
			while(i < inp.length) {
				if (inp[i]=='V' && inp[i-1]=='I') {
					num+=4;
				}	else if (inp[i]=='X' && inp[i-1]=='I') {
					num+=9;
				}	else if (i==inp.length-1) {
					num+=mapObj[inp[i]]+mapObj[inp[i-1]];
				} 	else {
					num+=mapObj[inp[i-1]];
				}
				// console.log('inp.length:-'+inp.length+' i:-'+i+':'+'inp[i]:-'+inp[i]+'inp[i-1]:-'+inp[i-1]+'num:-'+num);
				i++;
			
			}
		} else {
			num+=mapObj[inp[0]];
		}
		
		console.log(`${inp} --> ${num}`);
	}

	toRoman(inp) {
		var j=inp;
		var mapObj=Roman.mapping();

		var roman='';
		var arr=[];
		for (let k in mapObj) if (!isNaN(k)) arr.push(k);
		console.log('arr:-'+arr);
		let i=1;
		while(i < arr.length) {
			console.log(`ITERATION:-${i} and inp :- ${inp}`);
			if (inp-arr[i-1]) {
				if (inp==4) {
					console.log('inp is 4');
					roman+='IV';
					break;
				} else if(inp==9) {
					console.log('inp is 9');
					roman+='IX';
					break;
				} else if ((inp > arr[i-1] && inp < arr[i]))  {
                	inp-=arr[i-1];
					roman+=mapObj[String(arr[i-1])];
					i=1;
					console.log(`IF BLOCK:-i is ${i} and inp :- ${inp} between ${arr[i-1]} and ${arr[i]} .Roman :- ${roman}`);
                } else if (arr.indexOf(String(inp))!=-1) {
                	console.log(arr.indexOf(inp))
					roman+=mapObj[String(inp)];
					console.log(`ELSE IF BLOCK:-i is ${i} and inp :- ${inp} between ${arr[i-1]} and ${arr[i]} .Roman :- ${roman}`);
					break;
				} else if((i==arr.length-1)) {
					inp-=arr[i];
					roman+=mapObj[String(arr[i])];
					console.log(`2nd ELSE IF BLOCK:-i is ${i} and inp :- ${inp} between ${arr[i-1]} and ${arr[i]} arr.length-1 is ${arr.length-1}.Roman :- ${roman}`);
					i=1;

                } else {
                	i++;
                	console.log(`ELSE BLOCK:- i is ${i} arr[i-1] is ${arr[i-1]} and inp :- ${inp} `);

                }
			} else {
				roman+=mapObj[String(arr[i-1])];
				break;
			}
		}

		console.log(`${j}-->${roman}`);
	}
	

}




const RomanNumerals=new Roman();
// RomanNumerals.fromRoman('MDCLXIX');

// RomanNumerals.toRoman(1000)
RomanNumerals.toRoman(999)
// RomanNumerals.toRoman(4)
// RomanNumerals.toRoman(1)
// RomanNumerals.toRoman(1991)
// RomanNumerals.toRoman(2006)
// RomanNumerals.toRoman(2020)

// RomanNumerals.fromRoman('XXI')
// RomanNumerals.fromRoman('I')
// RomanNumerals.fromRoman('IV')

// RomanNumerals.fromRoman('III')
// RomanNumerals.fromRoman('XIX')
// RomanNumerals.fromRoman('MMVII')
// RomanNumerals.fromRoman('MDCLXIX')
// RomanNumerals.fromRoman('M')



