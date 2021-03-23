// 1. Implement the following getCandy function:
// The function should return the candy element with the specified id.
// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id.
// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.
// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.
// function getCandy(candyStore, id){
// //your code
// }
// function getPrice(candyStore, id){
// //your code
// }
// function addCandy(candyStore, id, name, price){
// //your code
// }
// function buy(candyStore, id){
// //your code
// }


function getCandy(candyStore, id) {
    for (i = 0; i < candyStore.candies.length; i++) {
        if (candyStore.candies[i].id.match(id)) {
            return (candyStore.candies[i]);
        }
    }
}

function getPrice(candyStore, id) {
    for (i = 0; i < candyStore.candies.length; i++) {
        if (candyStore.candies[i].id.match(id)) {
            return (candyStore.candies[i].price);
        }
    }
}

function addCandy(candyStore, id, name, price, amount = 1) {
    candyStore.candies.push({
        name: `${name}`,
        id: `${id}`,
        price: price,
        amount: amount,
    });
}

function buy(candystore, id) {
    const candy = getCandy(candyStore, id)
    candy.amount--;
    candyStore.cashRegister = candyStore.cashRegister + candy.price;
}


const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

console.log(getCandy(candyStore, `5hd7y`));
console.log(getPrice(candyStore, `5hd7y`));
addCandy(candyStore, `dwem52c`, `Oreo`, 3);
console.log(candyStore.candies);
console.log(candyStore); //check if function buy works
buy(candyStore, `as12f`);
console.log(candyStore); //check if function works