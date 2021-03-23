const newReleases = [{
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{
            id: `W432534`,
            time: 65876586
        }],
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: [],
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [5.0],
        bookmark: [{
            id: 432534,
            time: 65876586
        }],
    },
];



let movies = [];
newReleases.forEach(function (element, index) {
    movies[index] = {
        id: element.id,
        name: element.title
    }
})

console.log(movies)


function myFunc(element) {
    moviesUseMap = {
        id: element.id,
        name: element.title,
    }
    return moviesUseMap;
}

let moviesUseMap = [];
let newitem = newReleases.map(myFunc)
console.log(newitem)