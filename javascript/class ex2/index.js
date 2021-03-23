class Car {
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }
    getBrand(){
        return this.brand;
    }
    
    getSpeed(){
        return this.speed;
    }
    print(){
        console.log(this.brand +` `+ this.speed)
    }
    setSpeed(newSpeed){
      this.speed = newSpeed;  
    }
}

const c1 = new Car(`BMW`,80)
const c2 = new Car(`Audi`,100)
const c3 = new Car(`Skoda`,60)
const c4 = new Car(`Porche`,120)
const carsArray = [c1,c2,c3,c4]
const fastesCar = carsArray.reduce((car,nextCar)=>{
    return car.getSpeed()>nextCar.getSpeed()?car:nextCar;
})
// console.log(fastesCar)

const sortedSpeed = (array)=>{
    array.sort((car,nextCar)=>{
        return car.getSpeed()-nextCar.getSpeed()
    })
    return array
}
// console.log(sortedSpeed(carsArray))