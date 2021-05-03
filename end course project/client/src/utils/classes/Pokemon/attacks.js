//! punch kick cut water_splash mega_kick heal tornado razor_leaf slash dragon_breath sand_attack tail_whip quick_attack shield lightning
const attacks = (attack) => {
    //*beware for pokemon type
    if (attack==="shield") return "shield"
    if (attack==="heal") return "heal"
    if(attack !== "heal" && attack !== "shield"){
        switch (true) {
            case "punch":
                return 0.2
                break;
            case "kick":
                return  0.3
                break;
            case "cut":
                return  0.25
                break;
            case "water_splash":
                return  0.3
                break;
            case "mega_kick":
                return  0.35
                break;
            case "tornado":
                return  0.3
                break;
            case "razor_leaf":
                return  0.45
                break;
            case "slash":
                return  0.4
                break;
            case "dragon_breath":
                return  0.45
                break;
            case "sand_attack":
                return  0.35
                break;
            case "tail_whip":
                return  0.35
                break;
            case "quick_attack":
                return  0.4
                break;
            case "lightning":
                return  0.45
                break;
        
            default:
                return 0.25
                break;
        }
    }


}

module.exports=attacks