// You are given a function, Pokeman, that takes three parameters,
// pokemonName, pokemonType, an array of different pokemon attack methods,
// pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in a variable.
// 2. Using prototype properties, add the following methods:(below)
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:
// Submit your answer to Hive.
// function Pokemon(pokemonName, pokemonType, pokemonAttackList){
// this.name = pokemonName;
// this.type = pokemonType;
// this.attackList = pokemonAttackList;
// }

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}


let charmander = new Pokemon(`Charmander`,`Fire`,[`punch`,`drop flame`,`sleep`])
let raichu = new Pokemon(`Raichu`,`Electric`,[`punch`,`thunder`,`poisen`])
let balbazaur = new Pokemon(`Balbazaur`,`Leaf`,[`seed`,`scratch`,`poisen`])


// • A method called callPokemon that will print the following: “I choose
// you, <pokemon name>

Pokemon.prototype.callPokemon = function(){
    return `i choose you, ${this.name}!`
}

// console.log(charmander.callPokemon())

// • A method called attack that takes one parameter, an attack number,
// that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”

Pokemon.prototype.attack = function(attackMethod){
    return `${this.name} used ${this.attackList[attackMethod]}`
}

// console.log(charmander.attack(2))
// console.log(charmander.callPokemon())

module.exports ={Pokemon}