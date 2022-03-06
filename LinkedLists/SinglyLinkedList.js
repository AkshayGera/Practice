class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; //severing the last Element
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(data) {
        let newHead = new Node(data);
        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(pos) {
        if (pos < 0 || pos >= this.length) return null;
        let i = 0;
        let current = this.head;
        while (i < pos) {
            current = current.next;
            i++;
        }
        return current;
    }
    set(index, data) {
        let node = this.get(index);
        if (node) {
            node.data = data;
            return true;
        }
        return false;
    }
    insert(index, data) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(data);
        if (index === 0) return !!this.unshift(data);
        let previous = this.get(index - 1);
        let newNode = new Node(data);
        let temp = previous.next;
        previous.next = newNode.next;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let previous = this.get(index - 1);
        let removed = previous.next;
        previous.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        console.log(arr);
    }
}


var list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.print();
list.reverse();
list.print();
//Big O => Search O(N), Access O(N), Removal O(1) or O(N), Insertion O(1) if adding a new item at the end or the start, O(N) if middle
