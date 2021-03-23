// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.


function longestWord(string) {
    if (typeof (string) !== `string`) {
        return `stop trolling. input must be string`
    }
    //! first variables initiallized 
    let i = 0;
    let word = ``;
    longestWordDetails = {
        length: 0,
        word: ``,
    };
    string = string.split('');
    let wordLengthCounter = 0;
    // ! run untill the first space
    while (string[i] !== ` `) {
        longestWordDetails.length++;
        i++
    }
    for (let i = 0; i < string.length; i++) {
        wordLengthCounter++;
        debugger;
        if (string[i] === ` ` || i === string.length - 1) {
            wordLengthCounter--;
            if (wordLengthCounter > longestWordDetails.length) {
                word = string.slice(i - wordLengthCounter, i + 1); //<<<< badass
                longestWordDetails.word = word;
                longestWordDetails.length = wordLengthCounter;
                wordLengthCounter = 0;
            } else {
                wordLengthCounter = 0;
            }
        }
    }
    const theWord = longestWordDetails.word.join('').split('')
    if(theWord[theWord.length-1]===` `){
        theWord.splice(theWord.length-1,1)
    }
   
    return theWord.join('');
}

module.exports = longestWord;
