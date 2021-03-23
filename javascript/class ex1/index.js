class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    getName() {
        return this.name;
    }

    getSound() {
        return this.sound;
    }

    print(){
        console.log(this.getName() +` makes `+ this.getSound())
    }
}

const a1 = new Animal(`Cheif`,`Woof!`)
const a2 = new Animal(`Goofy`,`Buuuu!`)
const a3 = new Animal(`Foxy`,`???`)
a1.print()
a2.print()
a3.print()