function countingSheeps(arr) {
    let numOfTrue = 0;
    let numOfFalse = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            numOfTrue++;
        } else {
            numOfFalse++;
        }
    }
    console.log(`Number Of True: ${numOfTrue}`)
    console.log(`Number Of False: ${numOfFalse}`)
}

countingSheeps([true, false, true, false, true, false, true, true, true])


