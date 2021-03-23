//* Create an object with a name property. The object should
//* also have a method that prints its name, and another
//* method that prints its name after a second with the help of
//* setTimeOut. in this exercise, you are not allowed to use
//* arrow functions.

let property = {
    name:`foo`,
    printName(){
        console.log(`Name:${this.name}`)
    },
    printNameWithDelay(){
        setTimeout(function(){
            console.log(`Name:${this.name}`)
        }.bind(this),500)                    // the function it self has to be bind to this
    }
}

property.printName()
property.printNameWithDelay()
