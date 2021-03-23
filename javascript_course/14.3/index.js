let result = 0;

function getSumOfEven(arr) {
    return (arr[1] + arr[3] + arr[5] + arr[7] + arr[9]);
}
debugger;
//  getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
result = getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result)
// the function need either log the returnvalue or store it. lets store it
// because the function ignore the 0th place in the array we got NaN. the last calculate (`arr[10]`) does not exist and it cause us problem