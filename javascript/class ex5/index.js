class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    addToX(xToAdd) {
        this.x += xToAdd;
    }

    addToY(yToAdd) {
        this.y += yToAdd;
    }

    setX(xToSet) {
        this.x = xToSet;
    }

    setY(yToset) {
        this.y = yToset;
    }

    addPoint(point) {
        this.x += point.getX();
        this.y += point.getY();
    }

    isSame(point) {
        if (this.x === point.x && this.y === point.y) {
            return true;
        }
        return false;
    }

    print() {
        console.log(this.x + ` ` + this.y)
    }

}

let p1 = new Point(3, 2)
let p2 = new Point(6, 1)
let p3 = new Point(3, 2)
let p4 = new Point(5, 4)
// p1.addPoint(p2)
// console.log(p1.isSame(p2))


class PointWorld {
    constructor() {
        this.points = []

    }

    addPoint(point) {
        this.points.push(point)
    }

    print() {
        console.log(this.points)
    }

    sortByY() {
        let returendArray = [];
        this.points.sort((point, nextPoint) => {
            return point.y - nextPoint.y;
        });
        return returendArray;
    }

    deleteDuplicate() {
        let myArray = [...this.points];
        console.log(myArray[1])
        for (let i = 0; i < myArray.length; i++) {
            let count = 0
            for (let x = 0; x < myArray.length; x++) {
                console.log(myArray[i].x)
                if (myArray[i].y == myArray[x].y && myArray[i].x == myArray[x].x) {
                    count++;
                }
            }
            count == 2 ? myArray.splice(i, 1) : null;
        }
        return myArray
    }

    sumAllX(){
       let totalX = this.points.reduce(function(total ,obj){
           return total + obj.x
        },0)
        return totalX
    }

    isExist(point){
       return this.points.includes(point)?true:false;
    }
}

let pw = new PointWorld()
pw.addPoint(p1)
pw.addPoint(p2)
pw.addPoint(p3)
// pw.print()
// pw.sortByY()
// pw.print()
// console.log(pw.deleteDuplicate())
// console.log(pw.sumAllX())
console.log(pw.isExist(p4))