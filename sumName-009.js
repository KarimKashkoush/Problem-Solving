// sumtion of litters with (@) removing

let cur = ["@", "K", "a", "s", "h", "k", "o", "@", "u", "s", "h"];

//======================================//
//Solution (1)
//======================================//
/* let myName = cur
    .filter(function (ele) return ele !== "@" ? true : false;)
    .reduce(function (ele, cur) return ele + cur;);
console.log(myName); */
//======================================//

//======================================//
//Solution(2)
//======================================//
let newCur = [];
function myName() {
    for (let i = 0 ; i < cur.length; i++) {
        if (cur[i] !== '@') {
            newCur.push(cur[i])
        }
    }
    console.log(newCur.join(""))
}
myName()
//======================================//


