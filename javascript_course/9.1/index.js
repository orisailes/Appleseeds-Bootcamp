// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.


function isString(string){
    function callback(str){
     return typeof(str)===`string` ? console.log(str): `Not a string`;
    }
    return callback(string)
   }
 
   console.log(isString(`Example`));
 
 
 let myFunc = function(myString) {return myString[0].toUpperCase() + myString.slice(1);}
 
 function firstWordUpperCase(string, func){
 string = string.split(' ')
 for(let i=0; i<string.length;i++){
   string[i] = func(string[i]);
 }
 return string;
 }
 
 
 console.log(firstWordUpperCase(`evfvdf sds`,myFunc).join(' '));
 
 
 const result = firstWordUpperCase(`this is a nicely and beautiful test`, myFunc).filter(word => word.length > 6);
 console.log(result);
 
 const makeItSecret = function(myString) {return myString.replace(/./g, '*')}
 function astrisks(string,func){
  string = string.split(' ');
  for(let i=0;i<string.length;i++){
    string[i] = func(makeItSecret(string[i]))
  }
  return string
 }
 
 console.log(astrisks(`this is my top secrets`,makeItSecret).join(' '))