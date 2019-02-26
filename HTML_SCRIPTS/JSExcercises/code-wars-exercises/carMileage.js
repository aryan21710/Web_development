// https://www.codewars.com/kata/catching-car-mileage-numbers/train/javascript


function isInteresting(number, awesomePhrases=[]) {

    if (number < 1000000000) {
        let numStr = number;
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log('number :-'+numStr);
        let allZeros=(numStr)=>{
            if (String(numStr).split('').length >= 2 && numStr > 97) {
                let n1 = String(numStr).split('').map((v, ind) => ind == 0 ? 1 : 0)
                n1 = Number(n1.join(''));
                if (Number.isInteger(numStr / n1)) {
                    return 2
                } else {
                    for(let i=numStr-2; i <= numStr+2; i++) {
                        debugger;
                        let arr = String(i).split('').splice(1, String(i).split('').length-1)
                        let n = arr.filter((v)=>v=='0');
                        if (n.length+1 >= String(numStr).split('').length) return 1;
                    }
                    return 0;
                } 
            }
            return 0;
        }

        let sameNo=(numStr)=> {
            if (String(numStr).split('').length >= 3) {
                let intNo = String(numStr).split('').map((v) => v = String(numStr)[0]);
                intNo = Number(intNo.join(''));
                if (intNo == numStr) {
                    return 2
                } else if (Math.abs(numStr - intNo) <= 2) {
                    return 1
                } else {
                    return 0
                }
            }
      
        }

        let palind=(numStr)=> {
            if (String(numStr).split('').length >= 3) {
                let rev = String(numStr).split('').reverse().join('');
                if (rev == String(numStr)) {
                    return 2
                } else if ((numStr - 2 == Number(String(numStr - 2).split('').reverse().join(''))) ||
                    (numStr + 2 == Number(String(numStr + 2).split('').reverse().join(''))) ||
                    (numStr - 1 == Number(String(numStr - 1).split('').reverse().join(''))) ||
                    (numStr + 1 == Number(String(numStr + 1).split('').reverse().join('')))) {
                    return 1
                } else {
                    return 0
                }
            }
        }

        let matchAwePhras=(numStr, awesomePhrases)=>{
            if (String(numStr).split('').length >= 3) {
                awesomePhrases.sort(function (a, b) { if (a - b > 0) { return 1 } else if (a - b > 0) { return -1 } })
                console.log('awePhrases:-' + awesomePhrases);
                if (awesomePhrases.includes(numStr)) {
                    return 2
                } else if (Math.abs(numStr - awesomePhrases[0]) <= 2 || Math.abs(numStr - awesomePhrases[1]) <= 2) {
                    return 1
                } else {
                    return 0
                }
            }

        }
        let incrSeq=(numStr)=> {
            if (String(numStr).split('').length >= 3) {

            let numStr1=String(numStr).split('');
            const intNo=numStr1.map((v,ind)=> {
                if (ind==0) {
                    n=Number(v)
                } else if (ind != 0 && ind != numStr1.length - 1) {
                    v=n+1;
                    n = Number(v);
                } else if (ind == numStr1.length - 1 && n=='9') {
                    v=Number(0);
                } else if (ind == numStr1.length - 1 && n != '9') {
                    v=n+1;
                }
                return v;
            })
            if (numStr==intNo.join('')) {
                return 2
            } else if(Math.abs(numStr-intNo.join(''))<=2) {
                return 1
            } else {
                return 0;
            }
        }
        }


        let decrSeq = (numStr) => {
            if (String(numStr).split('').length >= 3) {

            let numStr1 = String(numStr).split('');
            const intNo = numStr1.map((v, ind) => {
                if (ind == 0) {
                    n = Number(v)
                } else if (ind != 0 && ind != numStr1.length - 1) {
                    v = n - 1;
                    n = Number(v);
                } else if (ind == numStr1.length - 1 && n == '1') {
                    v = Number(0);
                } else if (ind == numStr1.length - 1 && n != '1') {
                    v = n - 1;
                }
                return v;
            })
            console.log(numStr+':'+intNo.join(''));
            if (numStr == intNo.join('')) {
                return 2
            } else if (Math.abs(numStr - intNo.join('')) <= 2) {
                return 1
            } else {
                return 0;
            }
            }
        }
        // const output = decrSeq(numStr);
        // return output;

        let func = [allZeros(numStr), sameNo(numStr), palind(numStr), 
                    matchAwePhras(numStr, awesomePhrases), incrSeq(numStr), decrSeq(numStr)]
        const output=func.map((v)=>v);
        console.log('output:-'+output);
        if (output.includes(2)) {
            return 2
        } else if (output.includes(1)) {
            return 1
        } else {
            return 0
        }
    }
    return 0; 
}

// let h=[3210,3208,3209,3211,3212,3213,9874,9876,9878,9879]
// for (let i in h) console.log(isInteresting(h[i], [1337, 256]))
// console.log(isInteresting(7894, [1337, 256]))
// console.log(isInteresting(3, [1337, 256]))
// console.log(isInteresting(1336, [1337, 256]))
// console.log(isInteresting(1337, [1337, 256]))
// console.log(isInteresting(11208, [1337, 256]))
// console.log(isInteresting(11209, [1337, 256]))
// console.log(isInteresting(11211, [1337, 256]))
// console.log(isInteresting(3, [1337, 256]));    // 0
// console.log(isInteresting(3236, [1337, 256])); // 0
// console.log(isInteresting(11207, [])); // 0
// console.log(isInteresting(11208, [])); // 0
// console.log(isInteresting(11209, [])); // 1
// console.log(isInteresting(11210, [])); // 1
// console.log(isInteresting(11211, [])); // 2
// console.log(isInteresting(1335, [1337, 256])); // 1
// console.log(isInteresting(1336, [1337, 256])); // 1
// console.log(isInteresting(1337, [1337, 256])); // 2
// console.log(isInteresting(265,[257,600]))
// console.log(isInteresting(80083))

// FOLLOWING ARE MARKED AS THE BEST SOLUTIONS. PLEASE REVIEW.
const chars = n => n.toString().split('')
const match = s => n => new RegExp(n).test(s)
const regex = r => n => r.test(n)

const tests = [
    match('1234567890'),                  // incremental
    match('9876543210'),                  // decremental
    regex(/^\d0+$/),                      // all zeroes
    regex(/^(\d)\1+$/),                   // repeated
    n => n == chars(n).reverse().join('') // palindrome
]

const test = (n, xs) => n > 99 &&
    (xs.indexOf(n) > -1 || tests.map(t => t(n)).some(x => !!x))

const isInteresting = (n, xs) =>
    test(n, xs) ? 2 : +(test(n + 1, xs) || test(n + 2, xs))




function isInteresting(number, awesomePhrases) {
    var tests = [
        function (n) { return /^\d00+$/.test(n); },
        function (n) { return /^(\d)\1+$/.test(n); },
        function (n) { return RegExp(n).test(1234567890); },
        function (n) { return RegExp(n).test(9876543210); },
        function (n) { return n + '' == (n + '').split('').reverse().join(''); },
        function (n) { return awesomePhrases.some(function (p) { return p == n; }); }
    ];

    var interesting = 0;
    tests.some(function (test) {
        if (number > 99 && test(number))
            return interesting = 2;
        else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
            interesting = 1;
    });
    return interesting;
}









