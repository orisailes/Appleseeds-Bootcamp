// 1. Build your own filter method with the help of prototypes
// 2. Build your own find method with the help of prototypes

const MyArray = [`ori`, 24, `Tiberias`, 1997]



//! the Myfind function return true if the element exist otherwise false
Array.prototype.Myfind = function (elementToFind) {
    for (let i of MyArray) {
        if (i === elementToFind) {
            return true;
        }
    }
    return false;
}


//! my filter function - returend all the match type

Array.prototype.Myfilter = function (typeWanted) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (typeof (this[i]) == typeWanted) {
            newArray.push(this[i])
        }
    }
    return newArray;
}



console.log(MyArray.Myfind(24))
console.log(MyArray.Myfilter(`number`))