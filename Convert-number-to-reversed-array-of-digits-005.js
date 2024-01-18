// Convert number to reversed array of digits


function convert(number) {
    let str = number.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(+str[i])
    }
    return arr.reverse();
}

console.log(convert(85964321568))
