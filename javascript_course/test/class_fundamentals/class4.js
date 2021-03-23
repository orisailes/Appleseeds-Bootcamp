class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    getByKet(key){
        return this[key]
    }
}
let p1 = new Person(`ori`,24)
console.log(p1.getByKet(`age`))
console.log(p1.getByKet(`name`))
console.log(p1)