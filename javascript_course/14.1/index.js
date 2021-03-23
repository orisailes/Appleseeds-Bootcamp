function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i];
    }
    return sum;
}
// missing comma!!@!@!@ ,,,,,

//! getSum([1, 2, 3][5, 66, 23]); - i used `debugger` tool via chrome

debugger;
// another bug at line 4 sum is const variable - i used terminal debug

//  return is missed - i notice that i dont get resault.. 
// and than finally - i should write console.log()and run the function to see the actuall result

console.log(getSum([1, 2, 3],[5, 66, 23]));



// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
