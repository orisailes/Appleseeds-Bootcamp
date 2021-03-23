class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element)
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;

    }

    getFirst() {
        return this.head
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    draw() {
        let output = `head=> `;
        let current = this.head;
        while (current.next) {
            output += (current.data + `, `);
            current = current.next;
        }
        output += (`${current.data} >> Null`)
        return output;
    }

    reverse() {
        let next = null;
        let prev = null;
        let current = this.head;
        while (current) { 
            next = current.next; // copy of the original next node
            current.next = prev; // breaking the current next pointer to the previous
            prev = current; // previous is now the original current
            current = next; // current change to the original next 
        }
        // current 1 current next 2 prev 1
        // current 2 current next 3 prev 2
        // current 3 current next 4 prev 3
        // current 4 current next null prev 4
        return prev; // the new head
    }
}

let list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.add(4)


console.log(list.draw())
console.log(list.reverse())