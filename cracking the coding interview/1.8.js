// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
// column are set to 0.

function zeroMatrix(matrix) {
    const newArr = matrix
    const toZero = []
    const zeroRow = (matrix, idx) => {
        for (let i = 0; i < matrix[idx].length; i++) {
            matrix[idx][i] !== 0 ? matrix[idx][i] = 0 : null
        }
    }

    const zeroLine = (matrix, idx) => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][idx] !== 0 ? matrix[i][idx] = 0 : null
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const element = matrix[i][j]
            element === 0 && toZero.push([i, j])
        }
    }

    for (let i = 0; i < toZero.length; i++) {
        const row = toZero[i][0]
        const line = toZero[i][1]
        zeroRow(newArr, row)
        zeroLine(newArr, line)
    }
    return newArr
}

const a = zeroMatrix([
    [1, 4, 2, 7],
    [3, 5, 2, 1],
    [0, 1, 2, 0]
])

console.log(a);