function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter ++;
        }
    }
    return counter;
}
debugger;
let result = countOccurrences("ini mini miny moe", "n");
console.log(result)

// noticed that after the if statement, counter doesnt change! line 5 fixed
// counter need to be stored or log. lets store it - line 11