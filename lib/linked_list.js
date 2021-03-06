// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let temp = new Node(val);
        if (!this.head) {
            this.head = temp;
        } else {
            this.tail.next = temp;
        }
        this.tail = temp;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let removedNode;
        if (this.head === null) return undefined;
        if (this.head.next === null) {
            removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            this.tail = current;
            removedNode = this.tail.next;
            this.tail.next = null;
            this.length--;
        }
        return removedNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        if (this.head === null) this.tail = new Node(val);
        let prevHead = this.head;

        this.head = new Node(val);
        this.head.next = prevHead;
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let removedHead = this.head;
        if (!this.head) return undefined;
        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return removedHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let found = false;
        let current = this.head;
        while (current) { // { value: A, next: B, }
            if (current.value === target) {
                found = true;
            }
            current = current.next;
        }
        return found;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index > this.length - 1 || index < 0) return null;
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }
        if (current) return current;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index > this.length - 1 || index < 0) return false;
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }
        current.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1 || index < 0) return false;
        let temp = new Node(val)
        let count = 0;
        let current = this.head;
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        let pointer = current.next;
        temp.next = pointer;
        current.next = temp;
        this.length++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length - 1 || index < 0) return undefined;
        let count = 0;
        let current = this.head;
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        let nodeToBeRemoved = current.next;
        current.next = current.next.next;
        this.length--;
        return nodeToBeRemoved;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
