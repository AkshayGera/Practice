class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count < index) {
                current = current.next;
                count++;
            }
            return current;
        }
        else {
            let count = this.length - 1;
            let current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(index, data) {
        let node = this.get(index);
        if (node != null) {
            node.data = data;
            return true;
        }
        return false;
    }
    insert(index, data) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(data);
        if (index === this.length) return !!this.push(data);

        let newNode = new Node(data);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let foundNode = this.get(index);
        let beforeNode = foundNode.prev;
        let afterNode = foundNode.next;
        beforeNode.next = afterNode;
        afterNode.next = beforeNode;
        foundNode.next = null;
        foundNode.prev = null;
        this.length--;
        return foundNode;
    }
}
// insertion = O(1) Removal = O(1), searching is optimized
let list = new List();
list.push(100);
list.push(200);
console.log(list);
list.pop();
console.log(list);