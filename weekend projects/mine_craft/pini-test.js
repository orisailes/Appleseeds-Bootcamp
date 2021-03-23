/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h.
​
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
​
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
​
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
​
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

function Car(make,speed){
    this.speed=speed;
    this.make=make;
    this.accelerate = function(){
        // this.speed = this.speed+10;
        this.speed += 10;
    }
}


// Car.prototype.accelerate = function(){
//     this.speed = this.speed+10
//     console.log(`${this.speed}`)
// }

Car.prototype.break = function(){
    this.speed = this.speed-5
    console.log(`${this.speed}`)
}


let car1 = new Car(`BMW`,120)
let car2 = new Car(`MERCEDES`,120)

//!
//make-BMW
//speed-120
car1.accelerate()
//make-BMW
//speed=speed+10 ->> 130
//!


//make-BMW
//speed-130
car1.break()
//make-bmw
//speed-(130-5)->125


console.log(car1.accelerate)





// car1.accelerate()
// car1.accelerate()
// car2.accelerate()
// car2.accelerate()
