function calculateWinners(snapshot, penguins) {
    snapshot = snapshot.split(' ');
    let snapWork = [];
    let penguinsResult = {};
    let penguinNumber = -1;
    let sortable = [];
    let final = [];
    for (let i = 0; i < snapshot.length; i = i + 4) {
        snapWork.push(snapshot[i]);
    }
    for (let x of snapWork) {
        let linesCounter = 0;
        let wavesCounter = 0;
        let passed = false;
        let row = 0;
        while (passed === false) {
            x[row] === `p` || x[row] === `P` ? passed = true : passed = false;
            row++;
        }
        while (x[row] !== `|`) {
            x[row] === `-` ? linesCounter++ : wavesCounter++;
            row++;
        }
        penguinNumber++;
        penguinsResult[penguins[penguinNumber]] = linesCounter + wavesCounter * 2
    }
    for (var penguin in penguinsResult) {
        sortable.push([penguin, penguinsResult[penguin]]);
    }
    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });
    final.push(`GOLD: ${sortable[0][0]}, SILVER: ${sortable[1][0]}, BRONZE: ${sortable[2][0]}`)
    return final
  
};
