// Given a string, write a function to check if it is a permutation of a palindrome.

function isPalindromPermutation(string) {
    const middle = Math.floor(string.length / 2)
    let isHitMiddle = false
    let helper = string.split('')
    let obj = {}

    for (let letter of helper) {
        obj[letter] ? obj[letter]++ : obj[letter] = 1
    }
    for (let letter in obj) {
        if (obj[letter] % 2 !== 0 && isHitMiddle) return false
        if (obj[letter] % 2 !== 0 && !isHitMiddle) isHitMiddle = true
    }

    return true

}

const a = isPalindromPermutation('mvkdmkvcdmklc') //false
const x = isPalindromPermutation('pwepeee') // peeweep
const y = isPalindromPermutation('ipp') // pip
const z = isPalindromPermutation('ivvrere') // reviver
console.log('a:', a)
console.log('x:', x)
console.log('y:', y)
console.log('z:', z)