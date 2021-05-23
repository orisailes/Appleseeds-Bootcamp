//URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)

function urlify(url) {
    let helper = url.split(' ')
    for (let i = 0; i < helper.length; i++) {
        const element = helper[i];
        const nextElement = helper[i + 1]
        if (element === '') {
            nextElement !== '' ? helper[i] = "%20" : helper.splice(i, 1)
            i--
        }
    }
    return helper.slice(0,helper.length-1).join('')
}

const x = urlify("Mr   John           Smith       ")
console.log(x)