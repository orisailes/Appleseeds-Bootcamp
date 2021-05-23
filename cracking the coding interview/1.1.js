//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
//cannot use additional data structures?

function isUnique(str) {
    let obj = {}
    str = str.split('')
    for (let letter of str) {
        if (obj[letter]) {
            return false
        }
        obj[letter] = true
    }
    return true
}


const x = isUnique("amivalidstringornot")
console.log('x:', x)