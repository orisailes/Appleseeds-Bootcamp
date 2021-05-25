// from java course at open university 

function isSink(matrix) {
    let snail = 0
    let sumLine = 0
    for (let i = 0; i < matrix.length; i++) {
        const rightElement = matrix[i][i + snail]
        if (rightElement === 0 || rightElement === 1) {
            if (rightElement === 1) {
                snail = 0
            } else {
                snail++
                i--
            }
        } else {

            const isAllZeros = matrix[i].slice(0, i).every((num => num === 0)) //check for all previous row 
            //finally, check for line
            if (isAllZeros) {
                for (let j = 0; j < matrix.length; j++) {
                    const element = matrix[j][i];
                    sumLine += element
                }
                if (sumLine === 5) {
                    return true
                } else {
                    sumLine = 0
                }
            }
        }
    }
    return false
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
const matrixC = [
    [0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 1]
]

const a = isSink(matrixA)
const b = isSink(matrixB)
const c = isSink(matrixC)
console.log('a:', a)
console.log('b:', b)
console.log('c:', c)