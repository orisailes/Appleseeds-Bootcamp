let myArr = [];

// fill array
myArr = Array.from({
    length: 100
});
myArr.fill('Hi', 0, 100);
console.log(myArr);

// array from
let myArr2 = Array.from({
    length: 100
}, function (item, index) {
    return index
});
console.log(myArr2);

// array is array?
let myArr3 = 'i am a string';
console.log(Array.isArray(myArr));
console.log(Array.isArray(myArr2));
console.log(Array.isArray(myArr3));

// copy of array
let myArr4 = [...myArr2];
console.log(myArr2, myArr4);