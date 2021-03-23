// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isogram(string) {
    string=string.toLowerCase().split('');
    let helper=string;
    for (let i = 0; i < string.length; i++){   
        for(let x= 0;x<string.length;x++){
            helper = string.slice(0,i) + string.slice(i+1)
            if(string[i].includes(helper[x])){
                return false;
            }
        }
    }
    return true;
}

console.log(isogram(`mkdir`))