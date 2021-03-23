'use strict'
const input = require('readline-sync');
var money = 50;
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var realvalues = [];
var suits = ["♣", "♠", "♦", "♥"];
var cards = []
var cpRandom,userRandom,cpcard,usercard = 0;
var cpsuit,usersuit = '';
var go = 'y';


// initialize card values
for (let i = 0; i < 52; i++) {
  for (let x = 2; x <= 14; x++) {
    realvalues.push(x);
  }

}
//initialize card and suit
for (let s = 0; s < suits.length; s++) {
  for (let v = 0; v < values.length; v++) {
    const value = values[v];
    const suit = suits[s];
    cards.push({ value, suit });
  }
}

console.log('Hello and welcome to the "Game of war!"\nPlease enter your name')

let name = input.question();
console.log('Welcome' + ' ' + name + '!');


while (money > 0 && go == 'y') {
 console.log('Your currently have ' + money + ' ILS. place your bet between 1-' + money)
  let bet = Number(input.question());
while (isNaN(bet) == true || bet <= 0 || bet > money) {
  console.log('Sorry i dont play with liars. Good bye')
  throw 'BB';
}
  cpRandom = Math.floor(Math.random(cpRandom) * 51)
  userRandom = Math.floor(Math.random(userRandom) * 51)
  cpcard = cards[cpRandom].value
  usercard = cards[userRandom].value
  cpsuit = cards[cpRandom].suit;
  usersuit = cards[userRandom].suit

  console.log('My card is: ' + cpcard + cpsuit + ' Yours: ' + usercard + usersuit)


  if (realvalues[cpRandom] > realvalues[userRandom]) {
    console.log('You lose!')
    money = money - bet;
  }
  if (realvalues[cpRandom] < realvalues[userRandom]) {
    console.log('You won!');
    money = money + bet;
  }
  if (realvalues[cpRandom] == realvalues[userRandom]) {
    console.log('Its a tie!');
  }

  console.log('You have got ' + money + '.')

  if (money == 0) {
    console.log('You are broke. Bye!');
    break;
  }
  go = gamecontinue(); 
  if(go == 'n')
  {
    throw'';
  }
}



function gamecontinue()
{
   go = input.question('Do you want to keep going?( y/n question )\n')
while(go!='n' || go!='y')
{
  if (go == 'n') 
  {
    go = input.question('Are you sure? ( y/n question )\n')
    if (go == 'y') 
    {
      console.log('Ok. Have a good day. You got ' + money + ' ILS!')
      throw '';
    }
  }
  return 'y';
}
}