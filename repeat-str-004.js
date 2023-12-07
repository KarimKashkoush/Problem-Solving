// String Repeat

//======================================//
// solution (1)
//======================================//

// function repeatStr(number, str) {
//     return str.repeat(number)
// }
// console.log(repeatStr(10, " Hello "))

//======================================//


//======================================//
// solution (2)
//======================================//

function repeatStr(number, str) {
    let myStr = ""
    for (let i = 0; i < number; i++) {
        myStr += str
    }
    return myStr
}
console.log(repeatStr(10, " Hello "))

//======================================//