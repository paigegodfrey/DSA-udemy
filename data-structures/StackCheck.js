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
    this.length = 0;
  }

  // works like unshift
  push(val) {
    let newNode = new Node(val);

    if (!this.top) this.bottom = newNode;
    else newNode.next = this.top;

    this.top = newNode;
    this.length++;
    return this.length;
  }

}