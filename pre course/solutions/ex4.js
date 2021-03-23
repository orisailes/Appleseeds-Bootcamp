const input = require('readline-sync');

let amount = Number(input.question("How many people are you going with? "));
if (isNaN(amount)==true) 
{
  throw 'Im smarter than you';
}
var k = input.question("Should it be Kosher? (y/n question)");

if (k=='y')
 {
   var km = input.question("Should it be Kosher lemehadrin? (y/n question)");
 }

if (isNaN(km)==false || isNaN(k)==false){
  throw 'Gotcha!';
}

 var readlineSync = require('readline-sync'),
 favFood = ['Gourmet', 'Street food', 'Healthy food', 'Coffe house',];
 index = readlineSync.keyInSelect(favFood, 'Which kind of food do you prefer?');



let num = index+1;
if (k=='y' && km=='n')
{
if (num==1)
  console.log('Ok, my recommendation is "Avis Restaurant." I think it would be great for you');
if (num==2)
  console.log('I think you should try "Orits falafel" in Tiberias.')
if(num==3)
  console.log('My only suggestion is Aroma. Sorry')
if (num==4)
  console.log('"Kafederatzia" in Kfar Tavor is the best coffe house around"')
if (num==0)
console.log('Please come back when you are hungry...')
}

if (k=='y' && km=='y')
{
if (num==1)
  console.log('Try "Hamezah". I think it worth the money.')
if (num==2)
  console.log('I think you should try Orits falafel at tiberias.' );
if(num==3)
  console.log('"Hummus Eliyahoo" its the best option for you')
if (num==4)
  console.log('You got nice coffe house called "Cafe Cafe" whitch most of their coffe house are Lemahadrin!')
if (num==0)
console.log('Please come back when you are hungry...')
}

if (k=='n')
{
if (num==1)
  console.log('Try "1910". Its the best around')
if (num==2)
  console.log('I like to go around at "Agamon Market". They have a lot of options.')
if(num==3)
  console.log('I can suggest of "Tabula Rasa" at Kiryat Shemona which achived the best healthy restaurant in the north.')
if (num==4)
  console.log('"Matarello" at Ein Zivan is absolutly the best option around')
if (num==0)
console.log('Please come back when you are hungry...')
}