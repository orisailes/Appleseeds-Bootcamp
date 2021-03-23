// Create a function that takes one argument, an array.
// Use this array:
// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }

const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
    "hamburgers"
];

let myArray = [];

for (let i = 0; i < array.length; i++) {
    myArray[i] = [...array[i].toLowerCase()];
}

myArray = myArray.flat()
let countArray = [];


for (let x = 97; x < 123; x++) {
    const letter = (String.fromCharCode(x));
    let amount = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === letter) {
            countArray.push({
                letter,
            });
            break;
        }
    }
}

for (let x = 0; x < countArray.length; x++) {
    countArray[x].amount = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (countArray[x].letter === myArray[i]) {
            countArray[x].amount++;
        }
    }
}

console.log(myArray)
console.log(countArray)