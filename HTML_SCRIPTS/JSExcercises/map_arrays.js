
// #KEYWORDS:- [USAGE OF MAP IN AN ARRAY];

// map will create a new array by transforming the old array without changing it, but creating a copy and
// making som changes in it. multiplier is a new transformed array which is created by making a copy from
// numbers and making some changes in it.
const multiplier = {
    numbers: [10,20,30,40,50],
    multipleBy : 3,
    multiply () {
        return this.numbers.map((n) => n * this.multipleBy);
    }
}

console.log('MULTIPLY BY 3 GETS:-'+multiplier.multiply());