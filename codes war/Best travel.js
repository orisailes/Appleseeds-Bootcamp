function chooseBestSum(t, k, ls) {
    let bestSum = null
    for (let first = 0; first < ls.length; first++) {
        for (let second = first + 1; second < ls.length; second++) {
            if (k >= 3) {
                for (let third = second + 1; third < ls.length; third++) {
                    if (k === 4) {
                        for (let fourth = third + 1; fourth < ls.length; fourth++) {
                            const result = ls[first] + ls[second] + ls[third] + ls[fourth]
                            if (result > bestSum && result <= t) bestSum = result
                        }
                    } else {
                        const result = ls[first] + ls[second] + ls[third]
                        if (result > bestSum && result <= t) bestSum = result
                    }
                }
            }
            const result = ls[first] + ls[second]
            if (result > bestSum && result <= t) bestSum = result
        }
    }
    console.log(bestSum);
}
var ts = [50, 55, 56, 57, 58]
chooseBestSum(226, 4, ts) // 226)
// ts = [50]
// chooseBestSum(163, 3, ts) // null)
// ts = [91, 74, 73, 85, 73, 81, 87]
// chooseBestSum(230, 3, ts) // 228)