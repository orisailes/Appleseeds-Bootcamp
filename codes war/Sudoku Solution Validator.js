function validSolution(board) {

    //! handle zeros
    const boxes = {
        boxOne: [],
        boxTwo: [],
        boxThree: [],
        boxFour: [],
        boxFive: [],
        boxSix: [],
        boxSeven: [],
        boxEight: [],
        boxNine: [],
    }

    const getRow = (index) => {
        const row = board[index]
        if (row.find((num) => num === 0)) return false
        return row
    }

    const getLine = (index) => {
        const lineArr = []
        for (let row = 0; row < board.length; row++) {
            lineArr.push(board[row][index])
        }
        if (lineArr.find((num) => num === 0)) return false
        return lineArr
    }

    const checkForDuplicates = (arr) => {
        const checker = new Set(arr)
        return checker.size === arr.length ? true : false
    }

    for (let i = 0; i < board.length; i++) { // fill up the boxes
        for (let j = 0; j < board.length; j++) {
            if (i < 3) {
                j < 3 ? boxes.boxOne.push(board[i][j]) :
                    j < 6 ? boxes.boxTwo.push(board[i][j]) :
                    boxes.boxThree.push(board[i][j])
            }
            if (i < 6 && i >= 3) {
                j < 3 ? boxes.boxFour.push(board[i][j]) :
                    j < 6 ? boxes.boxFive.push(board[i][j]) :
                    boxes.boxSix.push(board[i][j])
            }
            if (i < 9 && i >= 6) {
                j < 3 ? boxes.boxSeven.push(board[i][j]) :
                    j < 6 ? boxes.boxEight.push(board[i][j]) :
                    boxes.boxNine.push(board[i][j])
            }
        }

    }

    for (let i = 0; i < board.length; i++) {
        if (i === 0) {
            const isValid = checkForDuplicates(getRow(i))
            if (!isValid) return false
        }

        const isValid = checkForDuplicates(getLine(i))
        if (!isValid) return false

    }
    for (let box in boxes) {
        const isValid = checkForDuplicates(boxes[box])
        if (!isValid) return false
    }
    return true
}



const x = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]) // true

const y = validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]) // false 

console.log('x:', x)
console.log('y:', y)