class Rectangle
{
    constructor(_height, _width, _color)
    {
        console.log(`Hey`)
        this.height = _height
        this.width = _width
        this.color = _color
    }

    getArea () {
        return this.width * this.height;
    }

    printDescription () {
        return `I am a rectangle of ${this.width} x ${this.height} and i am ${this.color}`
    }
}

let myRectangle1 = new Rectangle(5,3,"red");
let myRectangle2 = new Rectangle(20,10,"yellow");
console.log(myRectangle1.getArea())
console.log(myRectangle1.printDescription())