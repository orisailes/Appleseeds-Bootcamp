function makeAllCaps(array) {

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== `string`) {
            return Promise.reject()
        } else {
            array[i] = array[i].toUpperCase();

        }
    }
    return Promise.resolve(array)
}

function handleError() {
    console.error(`Something went wrong! I Guess You Put Invalid ARRAY.`)
}

let myArr = [`scott`, `miri`, `bibi`, `benny`, 2]
myArr = makeAllCaps(myArr)
    .then(function (array) {
        array.sort();
        console.log(array);
    })
    .catch(() => {
        handleError()
    })