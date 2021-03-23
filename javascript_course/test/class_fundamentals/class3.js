class Square {
    constructor (_width){
        this.width = _width
        this.heigth = _width
    }

    static equals(a,b){
        return a.width*a.heigth === b.heigth * b.width;
    }

    static isValidSquare (width,heigth){
        return width===heigth;
    }
}

let square1 = new Square(8);
let square2 = new Square(8);
console.log(square1)
console.log(Square.equals(square1,square2))
console.log(Square.isValidSquare(8,8))