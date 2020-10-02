class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = first;
    this.last = last;
    this.size = 0;
  }

  // works the same as push
  add(val) {
    let newNode = new Node(val);

    if (!this.first) this.first = newNode;
    else this.last.next = newNode;

    this.last = newNode;
    this.size++;
    return this.size;
  }

  // works the same as unshift
  remove() {
    if (!this.size) return;

    let nodeRemoved = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    else this.first = this.first.next;

    this.size--;
    return nodeRemoved;
  }

  peek() {
    if (!this.size) return;
    return this.first;
  }

  isEmpty() {
    return this.first === null;
  }
}