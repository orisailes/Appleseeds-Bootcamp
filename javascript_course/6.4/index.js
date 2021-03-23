function percentageOfWorld(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = ((arr[i] / 7900) * 100)
    }
    return arr;
}


let populationArray = [421, 101, 1233, 1596];

console.log(percentageOfWorld(populationArray));