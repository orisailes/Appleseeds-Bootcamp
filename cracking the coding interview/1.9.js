// String Rotation:Assumeyou have a method isSubstringwhich checks if one word is a substring
// of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

function isSubstring(string1, string2) {
    string1 = string1.split('')
    string2 = string2.split('')
    for (let i = 0; i < string1.length; i++) {
        if (string1[0] === string2[i]) {
            string1.splice(0, 1)
            string2.splice(i, 1)
            i = -1
        }
    }
    if (!string1.length && !string2.length) return true
    return false
}

const a = isSubstring("waterbottle", "erbottlewat")
console.log(a);