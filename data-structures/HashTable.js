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

    if (!this.length) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
    return this.length;
  }
}

// ask how to handle duplicate keys; not reflected here
class HashTable {
  // default size set based on Udemy course => arbitrary
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    
    // reduces collisions and creates more uniform distribution
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = new LinkedList();
    this.keyMap[idx].push(key, value);
  }

  get(key) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) throw new Error('key does not exist');

    let curr = this.keyMap[idx].head;
    while (curr !== null) {
      if (curr.key === key) return val;
      curr = curr.next;
    }
    throw new Error('key does not exist');
  }

  getKeys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        let curr = this.keyMap[i].head;
        while (curr !== null) {
          keys.push(curr.key);
          curr = curr.next;
        }
      }
    }
    return keys;
  }

  getValues() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        let curr = this.keyMap[i].head;
        while (curr !== null) {
          values.push(curr.val);
          curr = curr.next;
        }
      }
    }
    return values;
  }
}