// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

function isPermutation(string1, string2) {
    let obj = {}
    let isPer = true

    if(typeof string1 !== "string" || typeof string2 !== "string") return false
    if (!string1.length || !string2.length) return false

    string1 = string1.split('')
    string2 = string2.split('')


    for (let letter of string1) {
        obj[letter] ? obj[letter]++ : obj[letter] = 1
    }
    for (let letter of string2) {
        if(!isPer) return false
        obj[letter] ? obj[letter]-- : isPer = false
    }
    return isPer
}

const x = isPermutation("hello", "helol")
console.log(x);