function spinWords(string) {
    string = string.split(' ')
    console.log(string);
    let newString = []
    for (let word of string) {
        if (word.length > 4) {
            word = word.split('').reverse().join('');
            newString.push(word + ` `)
        } else {
            newString.push(word + ` `)
        }
    }
    newString = newString.join('')
    newString = newString.slice(0, newString.length - 1)
    return newString
}

console.log(spinWords(`hello fellow`))
