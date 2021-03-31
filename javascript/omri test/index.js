function shuffle(array) {
    let shuffledArray = [];
    for (let i = 0; i < array.length; i++) {
        let num = Math.floor(Math.random() * array.length + 1);
        while (shuffledArray.includes(num)) {
            num = Math.floor(Math.random() * array.length + 1);
        }
        shuffledArray.push(
            num
        );
    }
    return (shuffledArray)
}

console.log(shuffle([1, 2, 3, 4, 5, 6]))