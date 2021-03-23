function countryToLive(language,country,population,isIsland){
    if ((language.toLowerCase()==='english') && (population<50) && (isIsland===false)){
        let shouldI = `${country} is a place you should live in`;
        return shouldI;
    }else {
        shouldI = `${country} is not a place to live in`;
        return shouldI;
    }
}

let myLanguage = `English`;
let myCountry = `Finland`;
let myPopulation = 49;
let myIsIsland = false;



console.log(countryToLive(myLanguage,myCountry,myPopulation,myIsIsland));