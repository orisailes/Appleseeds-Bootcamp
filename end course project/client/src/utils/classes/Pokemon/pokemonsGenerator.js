const Pokemon = require('./Pokemon')

//* instroctions:
// initial stats will be between 10~15 dependes on the pokemon tendency
// initial maxHp will be always 75
// promoter will be between 0.1~0.5 depends on pokemons quality (above 0.6 its only super rare pokemons)
// stats are powered by 0.65 to make exponential series

const scyther = (level) => {
    const promoter = 0.4
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10 && level <= 15) attacks = ["cut", "punch", "heal"]
    if (level > 15) attacks = ["cut", "punch", "heal", "razor_leaf"]
    const result = new Pokemon(
        "scyther", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((12 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14.5 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "grass", // type
        attacks, // attacks(array)
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}


const hitmonlee = (level) => {
    const promoter = 0.35
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["kick", "punch"]
    if (level > 10) attacks = ["kick", "punch", "mega_kick"]
    const result = new Pokemon(
        "hitmonlee", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((11 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "fighting", // type
        attacks, // attacks,(array)
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const bulbasaur = (level) => {
    const promoter = 0.45
    let attacks = ["cut"]
    if (level >= 5 && level <= 10) attacks = ["heal", "cut"]
    if (level > 10) attacks = ["heal", "cut", "razor_leaf"]
    const result = new Pokemon(
        "bulbasaur", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "grass", // type
        attacks, // attacks,(array)
        Number((12 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const caterpie = (level) => {
    const promoter = 0.25
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["cut", "punch", "shield"]
    const result = new Pokemon(
        "caterpie", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const charmander = (level) => {
    const promoter = 0.45
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["slash", "punch"]
    if (level > 10) attacks = ["slash", "punch", "dragon_breath"]
    const result = new Pokemon(
        "charmander", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "fire", // type
        attacks, // attacks,(array)
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const eevee = (level) => {
    const promoter = 0.45
    let attacks = ["tailWhip"]
    if (level >= 5 && level <= 10) attacks = ["sand_attack", "tail_whip"]
    if (level > 10) attacks = ["sand_attack", "tail_whip", "quick_attack"]
    const result = new Pokemon(
        "eevee", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((15 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "rock", // type
        attacks, // attacks,(array)
        Number((15 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const eknas = (level) => {
    const promoter = 0.25
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["sand_attack", "punch"]
    if (level > 10) attacks = ["sand_attack", "punch"]
    const result = new Pokemon(
        "eknas", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((11 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((11 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const geodude = (level) => {
    const promoter = 0.3
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["rock_attack", "punch"]
    if (level > 10) attacks = ["shield", "punch", "rock_attack"]
    const result = new Pokemon(
        "geodude", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "rock", // type
        attacks, // attacks,(array)
        Number((11 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const metapod = (level) => {
    const promoter = 0.2
    let attacks = ["punch"]
    if (level >= 5) attacks = ["shield", "punch"]

    const result = new Pokemon(
        "metapod", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const pidgey = (level) => {
    const promoter = 0.25
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["cut", "punch", "tornado"]
    const result = new Pokemon(
        "metapod", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((11 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        Number((11 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const pikachu = (level) => {
    const promoter = 0.45
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["kick", "punch"]
    if (level > 10) attacks = ["kick", "punch", "lightning"]
    const result = new Pokemon(
        "pikachu", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "electric", // type
        attacks, // attacks,(array)
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const ponyta = (level) => {
    const promoter = 0.4
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["dragon_breath", "punch"]
    if (level > 10) attacks = ["dragon_breath", "punch", "mega_kick"]
    const result = new Pokemon(
        "ponyta", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "fire", // type
        attacks, // attacks,(array)
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const psyduck = (level) => {
    const promoter = 0.35
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["water_splash", "punch"]
    if (level > 10) attacks = ["water_splash", "punch", "mega_kick"]
    const result = new Pokemon(
        "psyduck", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "water", // type
        attacks, // attacks,(array)
        Number((15 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const raticate = (level) => {
    const promoter = 0.35
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["cut", "punch", "heal", "tail_whip"]
    const result = new Pokemon(
        "raticate", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const rattata = (level) => {
    const promoter = 0.25
    let attacks = ["punch"]
    if (level >= 5) attacks = ["cut", "punch"]

    const result = new Pokemon(
        "rattata", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const spearow = (level) => {
    const promoter = 0.35
    let attacks = ["kick"]
    if (level >= 5 && level <= 10) attacks = ["tornado", "kick"]
    if (level > 10) attacks = ["tornado", "kick", "quick_attack"]

    const result = new Pokemon(
        "spearow", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "normal,", // type
        attacks, // attacks(array)
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const squirtle = (level) => {
    const promoter = 0.4
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["water_splash", "punch"]
    if (level > 10 && level <= 15) attacks = ["water_splash", "punch", "quick_attack"]
    if (level > 15) attacks = ["water_splash", "punch", "quick_attack", "slash"]

    const result = new Pokemon(
        "squirtle", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((15 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "water", // type
        attacks, // attacks(array)
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const voltorb = (level) => {
    const promoter = 0.35
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["quick_attack", "punch"]
    if (level > 10) attacks = ["punch", "quick_attack", "lightning"]

    const result = new Pokemon(
        "voltorb", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((14 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((12 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "electric", // type
        attacks, // attacks(array)
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const vulpix = (level) => {
    const promoter = 0.4
    let attacks = ["cut"]
    if (level >= 5 && level <= 10) attacks = ["quick_attack", "cut"]
    if (level > 10) attacks = ["cut", "quick_attack", "dragon_breath"]

    const result = new Pokemon(
        "vulpix", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((13 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "fire", // type
        attacks, // attacks(array)
        Number((15 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}

const weedle = (level) => {
    const promoter = 0.25
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["punch", "cut", "heal"]

    const result = new Pokemon(
        "weedle", // name
        Math.round((75 * Math.pow(level,0.65))*promoter), // maxHp
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // defense
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // accurate
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)), // power
        level, // level
        "grass", // type
        attacks, // attacks(array)
        Number((10 * Math.pow(level,0.75)*promoter).toFixed(2)) // dodge
    )
    return result
}


module.exports = {
    scyther,
    hitmonlee,
    bulbasaur,
    caterpie,
    charmander,
    eevee,
    eknas,
    geodude,
    metapod,
    pidgey,
    ponyta,
    pikachu,
    psyduck,
    rattata,
    raticate,
    spearow,
    squirtle,
    voltorb,
    vulpix,
    weedle
}