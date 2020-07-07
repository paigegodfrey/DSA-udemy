class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.length) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.length) return;

    let curr = this.head;
    let prev;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    if (this.length > 1) {
      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
    return curr;
  }


  shift() {
    if (!this.length) return;

    let nodeRemoved = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    else this.head = nodeRemoved.next;
    this.length--;
    return nodeRemoved;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) this.tail = newNode;
    else newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this.length;
  }

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error('Invalid index');
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // TO DO - define method getAt(idx)
    let prev = this.getAt(idx - 1);
    let nodeRemoved = prev.next;

    prev.next = nodeRemoved.next;
    this.length--;
    return nodeRemoved;
  }

  // without using existing methods;
  removeAtManual(idx) {
    if (idx < 0 || idx >= this.length) throw new Error('Invalid index');

    let curr = this.head;
    let prev;

    if (idx === 0) {
      // 0 is the only valid index if this.length === 1  
      if (this.length === 1) this.tail = null;
      this.head = curr.next;
    }

    else if (idx === this.length - 1) {
      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }
      this.tail = prev;
      prev.next = null;

    } else {
      let i = 0;
      while (i < idx) {
        prev = curr;
        curr = curr.next;
        i++;
      }
      prev.next = curr.next;
    }

    this.length--;
    return curr;
  }
}
