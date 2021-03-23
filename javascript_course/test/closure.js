// function greet(whatToSay){
//     return function(name){
//         console.log(whatToSay + ' ' + name);
//     }
// }
// const sayHello = greet('Hello')
// const sayHi = greet('Hi')
// sayHello('Avi')
// sayHi('pini')
// function counter() {
//     let count = 0;
//     return function incrementCounter() {
//         count ++
//         console.log(a, count);
//     }
// }
// const counter1 = counter()
// counter1()
// counter1()
// counter1()
// const counter2 = counter()
// counter2()
// const counter3 = counter1
// counter3()
// function makeGreeting(language) {
//     return function (firstName, lastName) {
//         if (language === "en") {
//             console.log(`hello ${firstName} ${lastName}`);
//         } else if (language == "es") {
//             console.log(`hola ${firstName} ${lastName}`);
//         }
//     }
// }
// console.log(makeGreeting('es'));
// const greetEnglish = makeGreeting('en')
// const greetSpanish = makeGreeting('es')
// greetEnglish('John', 'Doe')
// greetSpanish('John', 'Doe')
// let i;
// for (i = 0; i < 3; i++) {
//     console.log(i);
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 2000);
// }
//https://www.youtube.com/results?search_query=js+closures+interview+questions

