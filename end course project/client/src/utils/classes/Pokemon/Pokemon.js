const pokemonList = require('./pokemonsList')

class Pokemon {
    constructor(name, maxHp, defense, accurate, power, level, type, attacks,dodge) {
        this.name = name
        this.hp = maxHp
        this.maxHp = maxHp
        this.defense = defense
        this.power = power
        this.accurate = accurate
        this.power = power
        this.level = level
        this.type = type
        this.attacks = attacks
        this.exp = 0
        this.dodge = dodge
    }

    isHitTarget(opponent) {
        //! test needed

        let result = this.accurate - opponent.dodge
        let isMiss = Boolean
        switch (true) {
            case (result === 0):
                result = 0.05
                break;
            case (result > 0): // attacker stronger than opponent
                result = 0.03
                break;
            case (result < 0):
                result = Number((result / 100).toString().replace("-", "")) + 0.03
                break;
            default:
                break;
        }
        const tester = Math.random() * 1
        if (tester > result) isMiss = false
        if (tester < result) isMiss = true
        console.log(tester);
        console.log(result);
        console.log(isMiss)
        return isMiss
    }

}
module.exports = Pokemon