//! punch kick cut water_splash mega_kick heal tornado razor_leaf slash dragon_breath sand_attack tail_whip quick_attack shield lightning
const attacks = (attack) => {
    //*beware for pokemon type
    if (attack === "shield") return "shield"
    if (attack === "heal") return "heal"
    if (attack !== "heal" && attack !== "shield") {
        switch (true) {
            case "punch":
                return 0.2
            case "kick":
                return 0.3
            case "cut":
                return 0.25
            case "water_splash":
                return 0.3
            case "mega_kick":
                return 0.35
            case "tornado":
                return 0.3
            case "razor_leaf":
                return 0.45
            case "slash":
                return 0.4
            case "dragon_breath":
                return 0.45
            case "sand_attack":
                return 0.35
            case "tail_whip":
                return 0.35
            case "quick_attack":
                return 0.4
            case "lightning":
                return 0.45
            default:
                return 0.25
        }
    }


}

module.exports = attacks