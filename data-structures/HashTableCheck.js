class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    let newNode = new Node(key, val);

    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
    return this.length;
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(str.length, 100); i++) {
      value = key[i].charCodeAt(0) - 96;
      total += (total * PRIME + value) % this.keyMap.length;
    }

    return total
  }

  set(key, value) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = new LinkedList;
    this.keyMap[idx].push(key, value);
  }

  get(key) {
    
  }
}
