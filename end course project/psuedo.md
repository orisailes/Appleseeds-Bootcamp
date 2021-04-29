this app will be my version to "Pokemon" game. The game includes different types of pokemon, attacks and maps that the user can travel the world and fight with another pokemon. The app will consider different case of damage evaluations, getting experience points and 2d user interfase.

Day1 :
* Write psuedo code
* collect resource from the internet such as pokemon back and forward png's, fight background, maps backgrounds, 2  different players picture collection and etc.

Day2 :
* take lesson and watch videos about rpg games and how to create player class 
* write diagram of all the special pokemon's attack (limit it), and to store them in our DB. consider mutual attacks, only type attacks
* initiall react app and make fight route. add basic css such as background , message box, HP holder, pokemon holder 
and pictures.

Day3-4 :
* make two pokemon component:
one: user pokemon - recive as props back image(render by name), name,level,  stats object that contains HP, power, defense, attacks list(only puch ATM) and pokemon type
two: cp pokemon - recive as props front image,name,level (will be close to user pokemon), stats, attack list and pokemon type
* Start with the fight section. the fight route will render message box,background, two different pokemons component.
* make several test fights with different pokemons but with only one attack and with no algorithems.
* make animations that triggered on attacks

Day5 : 
* make different attack types, handle attacks algorithems considered the type
* make function "handle attack" that recive as arguments two objects -
 attacker's attack name&type,
  opponent's defense,hp,type 
  and return the attack result (hp left). the function will consider the two pokemons types.
* make function "handle winning" that recive user level, experience point, opponent level and return the result(user level and exp points), if the exp point is 100%, user level up
* make function "level up" that get stats object and raise it up

Day6-7 :
* make register page that make new users or login to an existing one, use validation so the user cant acces fight or map if he isnt logged in.
* when use is sign in, he will pick his pick pokemon that stored in DB, choose boy/girl character, and begin in map number 1. only after the user pick pokemon and character, he gets a token.
* make several maps, using this video https://www.youtube.com/watch?v=DyWUW7Px1MQ

Day 8: