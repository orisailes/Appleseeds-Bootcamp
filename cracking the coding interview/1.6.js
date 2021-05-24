// String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

function comp(string) {
    string = string.split('')
    let helper = []
    let count = 1
    for (let i = 0; i < string.length; i++) {
        if (string[i + 1] === string[i]) {
            count += 1
        } else {
            helper.push(string[i],count)
            count = 1 
        }
    }
    return helper.join('')
}
const a = comp("aabcccccaaa") // a2blc5a3
const b = comp("voodooz") // v1o2d1o2z1

console.log('a:', a)
console.log('b:', b)