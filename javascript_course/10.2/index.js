// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.
// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)



myArray = [31, 2, 3, 40, 52, 6, 7, 8]

myArray.forEach(function (element, index, array) {
    array[index] = array[index] * 2;
})

// console.log(myArray)

// !

myArray = [31, 2, 3, 40, 52, 6, 7, 8]
let oddAraay = []

myArray.forEach(function (element, index, array) {
    array[index] % 2 === 1 ?
        oddAraay.push(array[index]) :
        index++
})

// console.log(oddAraay)

// !

let myArray2 = [123, `first string`, 1232, 324, `middle`, 32, `last`, 424];
let helper = [];
let showFirstAndLast = [];
myArray2.forEach(function (element, index, array) {
    if (typeof (element) === `string`) {
        helper.push(element)
    }
})
showFirstAndLast.push(helper[0])
showFirstAndLast.push(helper[helper.length - 1])

// console.log(showFirstAndLast)
// !

var vowelObject = {};

function getCount(str) {
    str = str.toLowerCase();
    var vowelsCountA = 0;
    var vowelsCountE = 0;
    var vowelsCountI = 0;
    var vowelsCountU = 0;
    var vowelsCountO = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] === `a` ? vowelsCountA++ : ``;
        str[i] === `e` ? vowelsCountE++ : ``;
        str[i] === `i` ? vowelsCountI++ : ``;
        str[i] === `u` ? vowelsCountU++ : ``;
        str[i] === `o` ? vowelsCountO++ : ``;
    }

    vowelObject = {
        e: vowelsCountE,
        a: vowelsCountA,
        u: vowelsCountU,
        i: vowelsCountI,
        o: vowelsCountO,
    }
}

getCount(`Example`);
// console.log(vowelObject);
// !


function capitalize(str) {
    str = str.toUpperCase();
    return str
}

// console.log(capitalize(`hello world`))
// !


function shiftLetters(str) {
    str = str.split('');
    str.forEach(function (element, index, array) {
        if (array[index] === `a`) {
            array[index] = `z`;
        } else {
            array[index] = element.charCodeAt() - 1
            array[index] = String.fromCharCode(array[index]);
        }
    })

    console.log(str)
}

// shiftLetters(`aloha`)

// !

function swapCase(str){
    str=str.split(' ');
  for(let i=0;i<str.length;i=i+2){


      str[i] = str[i].toUpperCase();
  }
 console.log(str);
}

swapCase(`hello world i am full stack developer`)