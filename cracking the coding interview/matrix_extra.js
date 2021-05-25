// from java course at open university 

function isSink(matrix) {
    let lineSum = 0
    const zerosRow = matrix.findIndex((row, i) => row.every((element => element === 0))) // find if there is row that all are 0's  and return the row index
    if (!zerosRow) return false
    for (let i = 0; i < matrix.length; i++) {
        lineSum += matrix[i][zerosRow];
    }
    return lineSum === 5 ? true : false
}


const matrixA = [
    [0, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 0],
    [0, 1, 0, 1, 1, 1]
]
const matrixB = [
    [0, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0]
]

const a = isSink(matrixA)
const b = isSink(matrixB)
console.log('a:', a)
console.log('b:', b)