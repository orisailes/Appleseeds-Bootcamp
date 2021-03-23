function isLeap(x) {
    if ((x > 99) && (Number.isInteger(x / 100))) {
        if (Number.isInteger(x / 400)) {
            return true;
        } else {
            return false
        }
    }
    if ((x % 4) === 0) {
        return true
    } else {
        return false;
    }
}

let year = Number(prompt("What year is it?"));

if (isLeap(year)) {
    console.log('It is a leap year')
} else {
    console.log('It is NOT a leap year')
}