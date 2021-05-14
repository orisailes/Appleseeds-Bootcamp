function pigIt(str) {
    const helper = str.split(' ')
    const reg = /[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g
    for (let i = 0; i < helper.length; i++) {
        let word = helper[i]
        if(!reg.test(helper[i])) helper[i] += word[0] + "ay"
        helper[i].length > 1 ? helper[i] = helper[i].slice(1) : null
    }
    return helper.join(' ')
}
