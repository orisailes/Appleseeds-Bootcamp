function anagrams(word, words) {
    let result = []
    const letterCounter = {}
    word.split('')
        .forEach(letter => {
            letterCounter[letter] ? letterCounter[letter]++ : letterCounter[letter] = 1
        });
    for (let initWord of words) {
        const helperWord = {
            ...letterCounter
        }
        initWord = initWord.split('')
        for (let i = 0; i < initWord.length; i++) {
            const letter = initWord[i];
            if (helperWord[letter]) {
                helperWord[letter]--
            } else {
                i++
            }
        }
        const checker = Object.values(helperWord).reduce((total, amount) => {
            return total + amount
        }, 0)
        if (checker === 0 && word.length === initWord.length) {
            result.push(initWord.join(''))
        }
    }
    console.log(result)
}



anagrams('big', ['bid', 'biig', 'dib', 'gig'])

anagrams('abba', ['aabb',
    'abab',
    'abbaa',
    'abbab',
    'abbba',
    'abcd',
    'baaab',
    'baab',
    'baba',
    'babaa',
    'bbaa'
])