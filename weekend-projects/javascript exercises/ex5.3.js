// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior

function toCamelCase(string){
    string = string.split('');
    for(let x=0;x<string.length;x++){
        if(string[x]=== `-` || string[x]===`_`){
            string[x+1]=string[x+1].toUpperCase();
            delete string[x];
        }
    }
    return string.join('');
}

console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("the-stealth-warrior"));