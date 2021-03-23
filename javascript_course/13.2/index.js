function percentageOfWorld(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = ((arr[i] / 7900) * 100)
    }
    return arr;
}


let populationArray = [421, 101, 1233, 1596];

// console.log(percentageOfWorld(populationArray));


// recreat the task with while loop

function percentageOfWorldWithWhileLoop(arr) {
    let i = 0;
    while (i < arr.length) {
        arr[i] = arr[i] / 7900 * 100;
        i++;
    }
    return arr;
}
console.log(percentageOfWorldWithWhileLoop(populationArray));