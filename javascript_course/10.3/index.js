const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];


// log the names
function names(data) {
    data.forEach(function (element, index, array) {
        console.log(element.name);
    })
}


// log the persons who older than 1990
function olds(data) {
    data.forEach(function (element, index, array) {
        element = element.birthday.slice(element.birthday.length - 4)
        element < 1990 ? console.log(array[index]) : null;
    })
}

let foodContainer = [];
let foodViewObject = [];

function foodView(data) {
    data.forEach(function (element, index, array) {
        foodContainer.push(element.favoriteFoods.meats)
        foodContainer.push(element.favoriteFoods.fish)
    })
    foodContainer = foodContainer.join(' ').split(' ').join(',').split(',');
    for (let i = 0; i < foodContainer.length; i++) {
        foodViewObject[foodContainer[i]] ? foodViewObject[foodContainer[i]]++ : foodViewObject[foodContainer[i]] = 1

    }
    console.log(foodViewObject)
}

names(data)
olds(data)
foodView(data)