class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let PRIME = 31;

    for(let i = 0; i < Math.min(str.length, 100); i++) {
      value = key[i].charCodeAt(0) - 96;
      total += (total * PRIME + value) % this.keyMap.length;
    }

    return total
  }

}
