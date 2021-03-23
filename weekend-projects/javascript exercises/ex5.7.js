// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function shortestWord(string) {
    if (typeof (string) !== `string`) {
        return `stop trolling. input must be string`
    }
    //! first variables initiallized 
    let i = 0;
    let word = ``;
    shortestWordDetails = {
        length: 0,
        word: ``,
    };
    string = string.split('');
    let wordLengthCounter = 0;
    // ! run untill the first space
    while (string[i] !== ` `) {
        shortestWordDetails.length++;
        i++
    }
    for (let i = 0; i < string.length; i++) {
        wordLengthCounter++;
        debugger;
        if (string[i] === ` ` || i === string.length-1) {
            wordLengthCounter--;
            if (wordLengthCounter < shortestWordDetails.length) {
                word = string.slice(i - wordLengthCounter, i+1); //<<<< badass
                shortestWordDetails.word = word;
                shortestWordDetails.length = wordLengthCounter;
                wordLengthCounter = 0;
            } else {
                wordLengthCounter = 0;
            }
        }
    }
    return shortestWordDetails.word.join('');
}
console.log(shortestWord(`this is a very long sentence included one letter in it and the algorithem works fine.`))