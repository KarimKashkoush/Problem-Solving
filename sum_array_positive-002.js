// you get an array of numbers, return the sum of all of the positives ones

//======================================//
// solution (1)
//======================================//
/* let numbers = [10, -12, 11, -7, 9, 2];
function sumOfPositive() {
    let initValue = 0;
    for (let i =0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            initValue += numbers[i];
        }
    }
    return initValue;
}
console.log(sumOfPositive()) */
//======================================//

//======================================//
// solution (2)
//======================================//
/* function sumOfPositive(numbers) {
    let initValue = 0;
    for (let i =0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            initValue += numbers[i];
        }
    }
    return initValue;
}
console.log(sumOfPositive( [10, 12, 11, -7, 9, 2])) */
//======================================//

//======================================//
// solution (3)
//======================================//
let numbers = [10, -12, 11, -7, 9, 2];
let sum = numbers
    .filter(function (ele) {
        return ele > 0 ? true : false;
    })
    .reduce(function (ele, cur) {
        return ele + cur;
    });
console.log(sum);
//======================================//