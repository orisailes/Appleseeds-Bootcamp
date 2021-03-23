function solution(input, markers) {
    input = input.split('\n')
    let wordPosition = 0;
    for (let word of input) {
        for (let i = 0; i < word.length; i++) {
            for (let x = 0; x < markers.length; x++) {
                if (word[i] === markers[x]) {
                    console.log(`match in ${i} of ${word}`)
                    input[wordPosition] = input[wordPosition].split('').slice(0, i - 1).join('')
                }
            }
        }
        wordPosition++
    }
    input = input.join('\n')
    return input
};

