//One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.

function oneWay(string1, string2) {

    let obj1 = {}
    let obj2 = {}
    string1 = string1.split('')
    string2 = string2.split('')
    let oneChange = false
    const longerLength = string1.length >= string2.length ? string1.length : string2.length

    for (let i = 0; i < longerLength; i++) {
        if (string1[i]) obj1[string1[i]] ? obj1[string1[i]]++ : obj1[string1[i]] = 1
        if (string2[i]) obj2[string2[i]] ? obj2[string2[i]]++ : obj2[string2[i]] = 1
    }
    for (const letter in obj1) {
        if (oneChange) {
            if (!obj2[letter]) return false
            if (obj2[letter]) obj2[letter]--
        }
        if (!oneChange) obj2[letter] ? obj2[letter]-- : oneChange = true
        obj2[letter] === 0 && delete obj2[letter]
    }

    return true
}

const a = oneWay("pale", "bake") // false
const x = oneWay("pale", "ple") // true
const y = oneWay("pales", "pale") // true
const z = oneWay("pale", "bale") // true

console.log("a: ", a);
console.log("x: ", x);
console.log("y: ", y);
console.log("z: ", z);