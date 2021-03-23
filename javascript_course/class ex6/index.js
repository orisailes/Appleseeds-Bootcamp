class Room {
    constructor(amount, level, roomId,isFree=false) {
        this.isFree = isFree;
        this.amount = amount;
        this.level = level;
        this.roomId = roomId;
    }

    checkIn(amount) {
        if (this.amount === amount) {
            this.isFree = false;
        }
    }

    print() {
        console.log(`amount:${this.amount}, isFree:${this.isFree}, level:${this.level}, ID:${this.roomId}`);
    }
}

let r1 = new Room(4, 2, 221);
let r2 = new Room(2, 1, 121);
let r3 = new Room(4, 3, 321);
let r4 = new Room(8, 5, 521);
let r5 = new Room(2, 2, 301,true);
let r6 = new Room(8, 7, 3521,true);
let r7 = new Room(4, 5, 21,true);


