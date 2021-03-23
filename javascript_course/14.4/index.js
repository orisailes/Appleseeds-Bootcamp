function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
debugger;
let result = calcAverage([85, 90, 92]);
console.log(result)

// by running debugger i notice that sum is undefiend, lets put a number in it - line2 fixed
// the function need to return the sum divided by the array length - line 6 fixed
// now, i notice that sum need to be stored or log after the function finished. lets store it and log it!
// problem fixed!
