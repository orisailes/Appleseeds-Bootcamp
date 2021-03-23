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


class Hotel {
    constructor() {
        this.rooms = [];
    }
    addRoom(room) {
        let isExist = false
        this.rooms.forEach((myRoom) => {
            if (room.roomId === myRoom.roomId) {
                isExist = true;
            }
        })
        if (isExist == false) {
            this.rooms.push(room);
        }
        return true;
    }

    removeRoom(roomIdToDelete) {
        this.rooms.forEach((myRoom, i) => {
            if (myRoom.roomId === roomIdToDelete && myRoom.isFree === true) {
                this.rooms.splice(i, 1);
            }
        })
    }

    checkFreeRoom(amountWanted) {
        let canCheckIn = false;
        this.rooms.forEach((myRoom) => {
            if (myRoom.amount === amountWanted && myRoom.isFree === true) {
                console.log(`you can go to room${myRoom}`);
                canCheckIn = true;
            }
        })
        if (canCheckIn == false) {
            console.log(`sorry no rooms available`);
        }

    }

    checkIn(amountWanted) {
        let done=false
        for (let room of this.rooms) {
            if (room.amount === amountWanted && room.isFree === true) {
                room.isFree===false;
                done=true;
                return true;
            }
        }
        if(done==false){
            console.log(`soory, cant check in`)
        }
    }

    highesRoom(){
        let sortedHighRooms=this.rooms.sort((roomA,roomB)=>{return roomB.level-roomA.level});
        sortedHighRooms.sort((roomA,roomB)=>{return roomB.amount-roomA.amount});
        return sortedHighRooms;
    }

    getAllFreeRooms(){
        let freeRooms=[];
        this.rooms.forEach((room)=>{room.isFree===true?freeRooms.push(room):null})
        freeRooms.sort((roomA,roomB)=>{return roomA.roomId-roomB.roomId});
        return freeRooms;
    }
    print() {
        console.log(this.rooms)
    }
}
let test=[]
test.sort((a,b)=>{})
let Bereshit = new Hotel()
Bereshit.addRoom(r1)
Bereshit.addRoom(r2)
Bereshit.addRoom(r3)
Bereshit.addRoom(r4)
Bereshit.addRoom(r4)
Bereshit.addRoom(r5)
Bereshit.addRoom(r6)
Bereshit.addRoom(r7)
Bereshit.removeRoom(321) //!deleting
// Bereshit.checkFreeRoom(2) 
// Bereshit.checkIn(2)
// console.log(Bereshit.highesRoom())
Bereshit.getAllFreeRooms()