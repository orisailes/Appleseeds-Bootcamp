// 1. Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.

function myFun(object) {
    let newArr = [];
    let newObject = {};
    let keysArr = Object.keys(object);
    let valueArr = Object.values(object);

    for (let i = 0; i < keysArr.length; i++) {
        newObject = {
            [valueArr[i]]: keysArr[i]
        }
        newArr.push(newObject)
    }
    return newArr;
}

myObject = {
    first: `Ori`,
    last: `Sailes`,
    job: `Developer`,
    hobbies: `Everything`,
}


console.log(myFun(myObject))