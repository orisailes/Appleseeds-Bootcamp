let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

// removing first item
const firstElement = people.shift();
console.log(people);

// removing last item

const lastElement = people.pop();
console.log(people);

// add item to the start of the array
people.unshift('Matt');
console.log(people);

// add item to the end of the array
people.push('Ori');
console.log(people);

// print the array using loop and stoping it
for (let i = 0; i < people.length; i++) {
    if (!people[i].match(`Mary`)) {
        console.log(people[i]);
    } else {
        break;
    }
}

// copy the array without 'Mary' & 'Matt'
const newPeople = people.slice(2)
console.log(newPeople);

// index of
console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));

// splice
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie")
console.log(people);

let withBob = [...people]
withBob.push("Bob")
console.log(withBob)