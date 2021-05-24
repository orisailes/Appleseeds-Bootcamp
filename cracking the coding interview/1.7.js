//  Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotate(matrix) {
    let rotated = [
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined],
        [undefined, undefined, undefined, undefined]
    ]
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            rotated[matrix.length - 1 - j][matrix.length - 1 - i] = matrix[i][matrix.length - 1 - j]
        }
    }
    return rotated
}

const a = rotate(
    [
        [1, 2, 3, 8],
        [8, 3, 4, 5],
        [3, 2, 5, 8],
        [5, 0, 7, 3]
    ])
// 5 3 8 1
// 0 2 3 2
// 7 5 4 3
// 3 8 5 8
console.log('a:', a)

1234
1234
1234
1234

1111
2222
3333
4444