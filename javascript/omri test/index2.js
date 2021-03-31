function howMany(string){

    const letterCounter = {};
    string = string.split('')
    for(let letter of string){
        if(letter !== ',' && letter !== '.' && letter !== ' ' && letter !== ';'){
           letterCounter[letter]?letterCounter[letter]++:letterCounter[letter]=1
        }
    }
    return(letterCounter)
}

console.log(howMany('hello, my name is; ori. sailes'))