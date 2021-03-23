// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function countingDuplicates(string) {
    let obj = {};
    let suspects = [];
    string = string.split('');
    string.forEach(element => {
        obj[element] ? obj[element]++ : obj[element] = 1
    });
    //pushing to suspects array
    for (let i in obj) {
        suspects.push([i, obj[i]])
    }
    //sotring
    suspects.sort(function (a, b) {
        return b[1] - a[1];
    })
    if (suspects[0][1] === suspects[1][1]) {
        return `${suspects[0][0]} and ${suspects[1][0]} both occurs ${suspects[0][1]} times`
    }
    if (suspects[0][1] === 1) {
        return `no letter occurs more than once`
    } else {
        return `${suspects[0][0]} occurs ${suspects[0][1]} times`
    }
    console.log(obj)
    console.log(suspects)
}

console.log(countingDuplicates(`aabbcde`));