class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (data < current.data) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (data > current.data) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
                else {
                    return false;
                }
            }
        }
    }
    find(data) {
        if (this.root === null) return false;
        if (this.root.data === data) return this.root;
        let current = this.root;
        while (true) {
            if (data === current.data) return current;
            if (data < current.data) {
                current = current.left;

            }
            else {
                current = current.right;
            }
            if (current === null) {
                return false;
            }
        }
    }
    bfs() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node.data);
        while (queue.length) {
            node = queue.shift();
            data.push(node.data);
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data;
    }
    dfsPreOrder() { //root left right
        //Recursive
        let visited = [];
        let current = this.root;
        function traverse(node) {
            visited.push(node.data);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
    dfsPostOrder() { //left right root
        let visited = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.data);
        }
        traverse(current);
        return visited;
    }
    dfsInOrder() { //left root right
        let visited = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            visited.push(node.data);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(10);
console.log(tree.dfsInOrder());
console.log(tree)