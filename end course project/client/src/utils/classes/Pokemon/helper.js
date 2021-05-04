const pokemonsGenerator = require('./pokemonsGenerator')
const Pokemon = require('./Pokemon')
const promotersList = require('./promotersList')

const enemy = pokemonsGenerator.rattata(5)
const result = pokemonsGenerator.scyther(50).increseExp(enemy,1)
console.log('result:', result)
// console.log(pokemonsGenerator.scyther(2));
// console.log(pokemonsGenerator.scyther(1));