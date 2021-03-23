function nextBigger(n) {

    n = n.toString().split('')
    let check = [...n]
    for (let i = 1; i < n.length; i++) {
        check = swap(check, n.length - i, n.length - (i + 1))

        if (check.join('') > n.join('')) {
            return Number(check.join(''))
        }
    }
    return -1
}

const swap = function swap(arr, x, y) {
    let helper = arr[x]
    arr[x] = arr[y]
    arr[y] = helper
    return arr
}

console.log(nextBigger(6411521110))

//6412011115