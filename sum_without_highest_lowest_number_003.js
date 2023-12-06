// Code wars Kata8 Solutions

// Check if Empty Value return 0
// Find the heighest Number
// Find the Lowest Number
// Filter the Array
// Sum all numbers in the array


//======================================//
//Solution
//======================================//
function sumWithOutHighestLowestNumber(array){
    return array.sort((a,b)=> a-b)
    .slice(1, -1)
    .reduce((cur, current) => cur + current, 0)
}

console.log(sumWithOutHighestLowestNumber([1,1,2,3,4,5,6,7,7]))
//======================================//
