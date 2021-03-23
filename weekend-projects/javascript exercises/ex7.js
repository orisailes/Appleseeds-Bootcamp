// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)


//! the logging is comment for your comfortable.

const originalArray = [4, 2, 67, 53, 2, 675, 523, 13, 9, 0, 232];

// my filter function - filter ther array to number who biiger than 6

function myFilter(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 6) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

// console.log(myFilter(originalArray))

originalArray.forEach(element => {
    
});


//forEach function
function myForEach(array){

    let obj = {};

    for(let i=0;i<array.length;i++){
        obj[i] = array[i];
    }

    return obj ;

}

//! returning the index and their value of the array as well as the array itself like foreach does.
const x = myForEach(originalArray);
// console.log(x)


//Map function - new array of only even numbers

function myMap(array){
    let myMapArray = [];
    for(let i of array){
        i%2===0?myMapArray.push(i):null;
    }

    return myMapArray;
}
// console.log(myMap(originalArray));