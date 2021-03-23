const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

function isMutual(arr1, arr2) {
    let mutual = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let x = 0; x < arr2.length; x++) {
            if (arr1[i] === arr2[x]) {
                mutual.push(arr1[i]);
            }
        }
    }
    return mutual;
}
console.log(isMutual(food, food1));