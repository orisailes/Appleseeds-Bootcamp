var moveZeros = function (arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            counter++
            arr.splice(i, 1)
            i--
        }
    }
    for (let i = 0; i < counter; i++) {
        arr.push(0)
    }

    return arr
}

const x = moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]) // returns [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]