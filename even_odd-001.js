// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//======================================//
// Solution (1)
//======================================//
function evenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOdd(8));
//======================================//


//======================================//
// Solution (2)
//======================================//
function even_Odd(value) {
    return value % 2 === 0 ? "Even" : "Odd";
}
console.log(even_Odd(7))
//======================================//


