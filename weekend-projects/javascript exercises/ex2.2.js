// Ex2 .2 - One and Zero - BinaryGiven an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

function toNum(binaryArray){
    return  parseInt(binaryArray.join(''), 2);
}

console.log(toNum([0, 1, 1, 0]));