// https://www.codewars.com/kata/sum-of-all-products/train/javascript

function sumOfProducts(a) {
    console.log('array passed:-'+JSON.stringify(arguments));
    let add=0;
    let mult=0;
a.forEach((v)=>{add+=v})
console.log('add:-'+add);
let test=1;
a.forEach((v)=>{
    test*=v;
})

console.log('full multiplication is:-'+test);

if (a.length > 2) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            mult += a[i] * a[j]
        }
    }
}


console.log('mult:-'+mult);
console.log('FINAL OUTPUT:-'+(mult+add+test));

}

// sumOfProducts([-9, 17, 21, 35, 6, 4, 2, 1, 0, 1, 1, 1, 2, 3, 4, 7, 129])
sumOfProducts([2,0,7]);
