class sortNumber {

    constructor(num) {
        this.numList = [];
    }

    addNum(numToAdd) {
        for (var i = 2; i < numToAdd; i++) {
            if (numToAdd % i === 0) {
                return false;
            }
            this.numList.push(numToAdd)
            return true;
        }
    }

    removeNum(numToRemove) {
        for (let i = 0; i < this.numList.length; i++) {
            if (this.numList[i] === numToRemove) {
                this.numList.splice(i, 1)
                return true;
            }
        }
        return false;
    }

    getAll() {
        return this.numList
    }
    print() {
        console.log(this.numList)
    }

    share(secondArray) {
        let returenArray = []
        for (let num of this.numList) {
            if (secondArray.includes(num)) {
                returenArray.push(num)
            }
        }
        return returenArray
    }

    union(secondArray) {
        let returenArray = secondArray.concat(this.numList)
        for (let i = 0; i < returenArray.length; i++) {
            let count = 0
            for (let x = 0; x < returenArray.length; x++){
                if(returenArray[i]==returenArray[x]){
                    count++;
                }
            }
            count==2?returenArray.splice(i,1):null;
        }
        return returenArray
    }
}

let myNumbers = new sortNumber();
let myNumbers2 = new sortNumber();
let myNumbers3 = new sortNumber();

for (let i = 2; i < 15; i++) {
    myNumbers.addNum(i)
}

myNumbers2.addNum(3)
myNumbers2.addNum(7)
myNumbers2.addNum(11)
myNumbers2.addNum(15)
myNumbers2.addNum(21)
myNumbers3.addNum(21)
myNumbers3.addNum(11)

// myNumbers.removeNum(11)

// myNumbers2.share(myNumbers3.getAll())
myNumbers2.union(myNumbers3.getAll())