function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

// function declaration
const china = 1441;
const chinaPercentage = percentageOfWorld1(china);

const india = 1340;
const indiaPercentage = percentageOfWorld1(india);

const israel = 8;
const israelPercentage = percentageOfWorld1(israel);


console.log(`function declaration:\n` + `china: ` + chinaPercentage + `%\n`, `india: ` + indiaPercentage + `%\n`, `israel: ` + israelPercentage + `%`);

// function expression
const myExpFunc = function(population) {
    return ((population / 7900) * 100);
}

console.log(`function expression: \n china: ${myExpFunc(china)}% \n india: ${myExpFunc(india)}% \n israel: ${myExpFunc(israel)}%`)