// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function organizeString(s1, s2) {
    let i = 0;
    let biggerLength = 0;
    let myString = [];
    s1.length > s2.length ? biggerLength = s1.Length : biggerLength = s2.length;
    
    //initiallizing from a-z
    for (let x = 97; x < 123; x++) {
        for (let i = 0; i < biggerLength; i++) {
            s1[i] === (String.fromCharCode(x)) || s2[i] === (String.fromCharCode(x)) ? myString.push(String.fromCharCode(x)) : ``;
        }
    }
    // deleting duplicate
    let newarr = [myString[0]];
    for (let i = 1; i < myString.length; i++) {
        if (myString[i] != myString[i - 1]) newarr.push(myString[i]);
    }
    return newarr.join('')
}
console.log(organizeString(`asdassdcsdvd`, `asdasvdsvsdfvdasd`));