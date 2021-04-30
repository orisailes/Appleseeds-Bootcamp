const Pokemon = require('./Pokemon')


const scyther = (level) => {
    let attacks = ["punch"]
    if(level>=5 && level<=10) attacks = ["cut","punch"] 
    if(level>10 && level <=20) attacks = ["cut","punch","heal"]
    const result = new Pokemon(
        "scyther",
        17*level,
        4*level,
        5*level,
        3*level,
        level,
        "grass",
        attacks
    )
    return result
}

const hitmonlee = (level) => {
    let attacks = ["punch"]
    if(level>=5 && level<=10) attacks = ["kick","punch"] 
    if(level>10 && level <=20) attacks = ["kick","punch","megaKick"]
    const result = new Pokemon(
        "hitmonlee",
        17*level,
        4*level,
        5*level,
        3*level,
        level,
        "grass",
        attacks
    )
    return result
}


module.exports={
    scyther,
    hitmonlee
}