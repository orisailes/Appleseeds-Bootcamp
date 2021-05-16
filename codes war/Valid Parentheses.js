function validParentheses(parens) {
    const arr = []
    helper = parens.split('')

    if (helper[0] === ")") return false


    for (let i = 0; i < helper.length; i++) {
        if (helper[i] === '(') {
            helper.splice(i, 1)
            arr.push('(')
            i--
        }
    }

    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            const checker = parens.slice(i + 1).split('')
            let closers = 0
            let openers = 0
            checker.forEach((par) => {
                par === '(' ? openers++ : closers++
            })

            if (openers === closers ) return false
        }
    }

    return arr.length === helper.length ? true : false

}

console.log(validParentheses("())(()")); // false
console.log(validParentheses("()")); // true
console.log(validParentheses("())")); // false