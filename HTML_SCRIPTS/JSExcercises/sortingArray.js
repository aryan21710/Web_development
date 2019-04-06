//  The callback function is called with two arguments, that are array's elements.
// The function below compares two values and returns one of three values: 0,1,-1

var arr=['wind','fire','rain'];

let sortme=(a,b)=>{
    let comparison=0;
    if (a < b) {
        comparison=1
    } else {
        comparision=-1
    }

    return comparison;
}
console.log(arr.sort(sortme));