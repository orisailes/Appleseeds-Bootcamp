class Square {
    constructor(_width){
        this.width = _width
        this.heigth = _width
        this.numOfRequestToArea = 0
    }

    get area (){
        this.numOfRequestToArea++;
        return this.width * this.heigth
    }
    
    set area(area){
        this.width = Math.sqrt(area)
        this.heigth = this.width
       
    }
}

let square1 = new Square(2);
console.log(square1.area)
square1.area = 16;
console.log(square1)
console.log(square1.area)
console.log(square1.numOfRequestToArea)