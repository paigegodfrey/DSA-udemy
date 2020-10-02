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

}