class Node {
  constructor(val) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  // works like unshift
  push(val) {
    let newNode = new Node(val);

    if (!this.top) this.bottom = newNode;
    else newNode.next = this.top;

    this.top = newNode;
    this.size++;
    return this.size;
  }

  // works like shift
  pop() {
    if (!this.top) return;

    let nodeRemoved = this.top;

    // if this.size === 1
    if (this.top.next === null) {
      this.top = null;
      this.bottom = null;
    }

    else this.top = nodeRemoved.next
    this.size--;
    return nodeRemoved;
  }

  peek() {
    if (!this.top) return;
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}