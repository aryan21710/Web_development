// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a,b) {
    console.log(a+':'+b);
    a=a.split('');
    b=b.split('');
    while(a.length != b.length) {
        a.length < b.length ? a.unshift('0') : b.unshift('0');
    }
    let output=[];
    let carryon=0;
    for(let i=a.length-1; i >= 0; i--) {
        let sum = 0;
        sum+=Number(carryon)+Number(a[i])+Number(b[i]);
        if (String(sum).length > 1 && String(sum)[0]=='1') {
            carryon = 1;
            sum= i==0? String(sum) : String(sum)[1];
        } else {
            carryon=0;
        }
        output.unshift(sum); 
    }
    return output.join('');
}

console.log(add("1", "1"))
console.log(add("123", "456"))
console.log(add("888", "222"))
console.log(add("1372", "69"))
console.log(add("12", "456"))
console.log(add("101", "100"))
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));





