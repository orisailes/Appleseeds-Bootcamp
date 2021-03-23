// 1. Who can add key and value pairs faster in a for loop?
// • Create an empty Object and assign it to a variable.
// • Create a start timer for your object to be measured.
// • Create a for loop that will iterate a million times. Inside
// your for loop on each iteration create a new key, value
// pair to your object using the variable I.
// • Do the same procedure for a Map object.
// • Compare the times.
// You may be surprised from the results :)
// 2. Who can find faster a specific property from itself?
// Now that we populated 100000 properties to our
// object’s find the following:
// • Find out how long time would it take for the Object to
// find a specific property from itself.
// • Find out how long time would it take for the Map to find
// a specific property from itself.
// 3. Who is faster in adding a single entry?
// 4. Who is faster in deleting a single entry?


let testObject = {};
let testMap = new Map();


// testing object performance
console.time("1M object keys&values");
for (let i = 0; i < 1000000; i++) {
    testObject[i] = {
        pushingNumber: `${i}`,
    };
}

console.timeEnd("1M object keys&values");

// testing object performance
console.time("1M map keys&values");
for (let i = 0; i < 1000000; i++) {
    testMap.set(i, `i`);
}

console.timeEnd("1M map keys&values");


// testing speed of specipic item
console.time(`Object clone`);
console.log(testObject[541252]);
console.timeEnd(`Object clone`);

console.time(`Map clone`);
console.log(testMap.get(541252));
console.timeEnd(`Map clone`);


// testing add one element inside

console.time(`Object add`);
testObject.newPush = {
    pushingNumber: 1000001,
};
console.timeEnd(`Object add`);


console.time(`Map add`);
testMap.set(`new`, 541252);
console.timeEnd(`Map add`);



// testing delet one element inside


console.time(`Map delete`);
testMap.delete(540210)
console.timeEnd(`Map delete`);


console.time(`Object delete`);
delete testObject[540210];
console.timeEnd(`Object delete`);
console.log(testObject)