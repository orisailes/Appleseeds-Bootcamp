const attacks = require('./attacks')
const promotersList = require('./promotersList')
class Pokemon {
    constructor(name, maxHp, defense, accurate, power, level, type, attacks, dodge) {
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
        this.maxExp = Math.pow(level, 3) - Math.pow(level - 1, 3)
    }

    isHitTarget(opponent) {

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
        if (tester <= result) isMiss = true
        return isMiss
    }

    calculateDamage(opponent = "", attack) {
        if (attack !== "heal" && attack !== "shield") {
            return (
                Math.floor(
                    attacks(attack) + 1 + this.power *
                    Math.abs(opponent.defense / 100 - 1) *
                    (Math.random() * (1.25 - 0.75) + 0.75)
                )
            )
        }
        if (attack === "shield" || attack === "heal") return "invalid attack"
    }

    increseHp(attack) {

        if (attack === "heal") {
            const newHp = Math.floor(this.hp += this.maxHp * (Math.random() * (0.15 - 0.08) + 0.08))
            return newHp >= this.maxHp ? this.maxHp : newHp
        }
        if (attack !== "heal") return "invalid hp increase"
    }

    increseDefense(attack) {
        if (attack === "shield") {
            const newDef = Math.round(this.defense += this.defense * (Math.random() * (0.15 - 0.08) + 0.08))
            return newDef
        }
        if (attack !== "shield") return "invalid defense increase"
    }

    calculateExp(enemy, percentCause) {
        const promoter = promotersList[enemy.name]
        let reward =
            (enemy.maxExp / this.maxExp) *
            promoter *
            this.maxExp *
            percentCause
        return Number((reward * percentCause *10).toFixed(2))
    }
}



module.exports = Pokemon