function pigIt (str) {
    const helper = str.split(' ')
    for(let i=0;i<helper.length;i++){
        helper[i][helper.length] = helper[i][0]
    }
    console.log(helper);

}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !