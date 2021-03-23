function Grade(x) {
    if (x <= 64) {
        return 'F'
    }
    if ((x > 64) && (x <= 69)) {
        return 'D'
    }
    if ((x > 69) && (x <= 79)) {
        return 'C'
    }
    if ((x > 79) && (x <= 89)) {
        return 'B'
    }
    if (x > 89) {
        return 'A'
    }
}

let x = prompt('Enter a Grade');
console.log(Grade(x));