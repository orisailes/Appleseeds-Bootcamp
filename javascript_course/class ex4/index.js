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

    addPoint(point){
        this.x+=point.getX();
        this.y+=point.getY();
    }

    isSame(point){
        if(this.x===point.x&&this.y===point.y){
            return true;
        }
        return false;
    }

    print(){
        console.log(this.x +` `+ this.y)
    }

}

let p1 = new Point(3,2)
let p2 = new Point(6,1)
// p1.addPoint(p2)
console.log(p1.isSame(p2))