const Pokemon = require('./Pokemon')


const scyther = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10 && level <= 15) attacks = ["cut", "punch", "heal"]
    if (level > 15) attacks = ["cut", "punch", "heal", "razor_leaf"]
    const result = new Pokemon(
        "scyther", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "grass", // type
        attacks, // attacks(array)
        5 * level // dodge
    )
    return result
}

const hitmonlee = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["kick", "punch"]
    if (level > 10) attacks = ["kick", "punch", "mega_kick"]
    const result = new Pokemon(
        "hitmonlee", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "fighting", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const bulbasaur = (level) => {
    let attacks = ["cut"]
    if (level >= 5 && level <= 10) attacks = ["heal", "cut"]
    if (level > 10) attacks = ["heal", "cut", "razor_leaf"]
    const result = new Pokemon(
        "bulbasaur", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "grass", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const caterpie = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["cut", "punch", "shield"]
    const result = new Pokemon(
        "caterpie", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const charmander = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["slash", "punch"]
    if (level > 10) attacks = ["slash", "punch", "dragon_breath"]
    const result = new Pokemon(
        "charmander", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "fire", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const eevee = (level) => {
    let attacks = ["tailWhip"]
    if (level >= 5 && level <= 10) attacks = ["sand_attack", "tail_whip"]
    if (level > 10) attacks = ["sand_attack", "tail_whip", "quick_attack"]
    const result = new Pokemon(
        "eevee", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "rock", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const eknas = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["sand_attack", "punch"]
    if (level > 10) attacks = ["sand_attack", "punch"]
    const result = new Pokemon(
        "eknas", // name
        11 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const geodude = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["rock_attack", "punch"]
    if (level > 10) attacks = ["shield", "punch", "rock_attack"]
    const result = new Pokemon(
        "geodude", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "rock", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const metapod = (level) => {
    let attacks = ["punch"]
    if (level >= 5) attacks = ["shield", "punch"]

    const result = new Pokemon(
        "metapod", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const pidgey = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["cut", "punch", "tornado"]
    const result = new Pokemon(
        "metapod", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const pikachu = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["kick", "punch"]
    if (level > 10) attacks = ["kick", "punch", "lightning"]
    const result = new Pokemon(
        "pikachu", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "electric", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const ponyta = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["dragon_breath", "punch"]
    if (level > 10) attacks = ["dragon_breath", "punch", "mega_kick"]
    const result = new Pokemon(
        "ponyta", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "fire", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const psyduck = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["water_splash", "punch"]
    if (level > 10) attacks = ["water_splash", "punch", "mega_kick"]
    const result = new Pokemon(
        "psyduck", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "water", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const raticate = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["cut", "punch", "heal", "tail_whip"]
    const result = new Pokemon(
        "raticate", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const rattata = (level) => {
    let attacks = ["punch"]
    if (level >= 5) attacks = ["cut", "punch"]

    const result = new Pokemon(
        "rattata", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "normal", // type
        attacks, // attacks,(array)
        5 * level // dodge
    )
    return result
}

const spearow = (level) => {
    let attacks = ["kick"]
    if (level >= 5 && level <= 10) attacks = ["tornado", "kick"]
    if (level > 10) attacks = ["tornado", "kick", "quick_attack"]

    const result = new Pokemon(
        "spearow", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "normal,", // type
        attacks, // attacks(array)
        5 * level // dodge
    )
    return result
}

const squirtle = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["water_splash", "punch"]
    if (level > 10 && level <= 15) attacks = ["water_splash", "punch", "quick_attack"]
    if (level > 15) attacks = ["water_splash", "punch", "quick_attack", "slash"]

    const result = new Pokemon(
        "squirtle", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "water", // type
        attacks, // attacks(array)
        5 * level // dodge
    )
    return result
}

const voltorb = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["quick_attack", "punch"]
    if (level > 10) attacks = ["punch", "quick_attack", "lightning"]

    const result = new Pokemon(
        "voltorb", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "electric", // type
        attacks, // attacks(array)
        5 * level // dodge
    )
    return result
}

const vulpix = (level) => {
    let attacks = ["cut"]
    if (level >= 5 && level <= 10) attacks = ["quick_attack", "cut"]
    if (level > 10) attacks = ["cut", "quick_attack", "dragon_breath"]

    const result = new Pokemon(
        "vulpix", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "fire", // type
        attacks, // attacks(array)
        5 * level // dodge
    )
    return result
}

const weedle = (level) => {
    let attacks = ["punch"]
    if (level >= 5 && level <= 10) attacks = ["cut", "punch"]
    if (level > 10) attacks = ["punch", "cut", "heal"]

    const result = new Pokemon(
        "weedle", // name
        17 * level, // maxHp
        4 * level, // defense
        5 * level, // accurate
        3 * level, // power
        level, // level
        "grass", // type
        attacks, // attacks(array)
        5 * level // dodge
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