class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(data) {
        let newNode = new Node(data);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.data;
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();