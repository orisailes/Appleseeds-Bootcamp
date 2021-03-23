// Ex2.4 - 
// UniqueThere is an array with some numbers. 
// All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55It’s 
// guaranteed that array contains at least 3 numbers.

function findUniq(array) {
    let suspects = [];
    let him;
    for (let i = 0; i < 1; i++) {
        for (let x = 0; x < array.length; x++) {
            if (array[i] !== array[x]) {
                suspects.push(array[i]);
                suspects.push(array[x]);
            }
        }
    }
    let count = 0;
    him = suspects[0];
    for (let i = 0; i < array.length; i++) {
        if (him === array[i]) {
            count++
        }
    }
    return count === 1 ? him : suspects[1];
}
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))