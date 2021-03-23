// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum :
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z .

function accum(string){
    string = string.toLowerCase();
    let newString =[];
    for(let i=0;i<string.length;i++){
        let x= string[i].toUpperCase();
        newString = [...newString,x + string[i].repeat(i) + `-`]
        
    }
    newString = newString.join('')
    newString = newString.slice(0,newString.length-1)
    return newString
}

console.log(accum(`cwAt`));