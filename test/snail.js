snail = function (array) {
    if (array[0][0] == undefined) {
        return [];
    }
    if (array.length == 1) {
        return array[0]
    }
    let mySnail = [];

    array[0].forEach(function (el) {
        mySnail.push(el);
    });

    for (let i = 1; i < array.length; i++) {
        mySnail.push(array[i][array.length - 1])
    };

    for (let i = array.length - 2; i > -1; i--) {
        mySnail.push(array[array.length - 1][i])
    }

    let i = array.length - 1
    while (i !== 1) {
        mySnail.push(array[i - 1][0]);
        i--;
    }

    for (let x = 1; x < array[1].length - 1; x++) {
        mySnail.push(array[1][x])
    }

    console.log(mySnail)

}


snail([[1, 2, 3, 4, 5, 6],
[20, 21, 22, 23, 24, 7],
[19, 32, 33, 34, 25, 8],
[18, 31, 36, 35, 26, 9],
[17, 30, 29, 28, 27, 10],
[16, 15, 14, 13, 12, 11]]);
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]