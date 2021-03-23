function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be ${jobTitle} at ${location}, your partner name will be ${partnerName} and youve got ${numberOfChildren} kids!`
}

let a = `Farmer`;
let b = `Golan Heights`;
let c = `Lusy`;
let d = `7`;

console.log(tellFortune(a, b, c, d));