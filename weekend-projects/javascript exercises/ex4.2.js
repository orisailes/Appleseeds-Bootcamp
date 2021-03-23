// Ex4.2 - Tribonacci -
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
// (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I
// won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature),
// we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]


function triBonachi(n) {
    if (n === 0) {
        return `invalid input`;
    }
    let arr = [1, 1, 1];
    let num = 0;
    let index = 3;
    while (index !== n) {
        num = ((arr[index - 3]) + (arr[index - 2]) + (arr[index - 1]));
        arr.push(num);
        index++;
    }
    return arr[arr.length-1];
}

console.log(triBonachi(14));