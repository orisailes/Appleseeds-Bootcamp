function BOOM(myArr) {
    for (let i = 1; i < x + 1; i++) {
        if (myArr[i] % 7 === 0) {
            myArr[i] = 'BOOM';
        }
        if (((myArr[i] > 9)) && ((Math.floor(myArr[i] / 10)) === 7)) {
            myArr[i] = 'BOOM';
        }
        if ((myArr[i] % 10) === 7) {
            myArr[i] = 'BOOM';
        }
    }
    return myArr;
}

let x = Number(prompt('Insert a Number'));
let arr = [];
for (let i = 0; i < x; i++) {
    arr.push(i)

}


console.log(BOOM(arr).toString());