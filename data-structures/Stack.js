class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  // from the left side => same as unshift
  push(val) {
    let newNode = new Node(val);

    if (!this.size) this.bottom = newNode;
    else newNode.next = this.top;

    this.top = newNode;
    this.size++;
    return this.size;
  }

  // from the left side => same as shift
  pop() {
    if (!this.size) return;
    
    let nodeRemoved = this.top;
    
    if (this.size === 1) {
      this.top = null;
      this.bottom = null;
    }

    else this.top = nodeRemoved.next;
    this.size--;
    return nodeRemoved;
  }

  peek() {
    if (this.top === null) throw new Error('stack is empty');
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}