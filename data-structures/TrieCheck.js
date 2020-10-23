class Node {
  constructor() {
    this.children = {};
    this.wordComplete = false;
  }
}


class Trie {
  constructor() {
    this.root = null;
  }

  insert(word) {
    // define pointer (current) => start at root
    let current = this.root;
    for (let letter of word) {
      if (!current.children[letter]) {
        let newNode = new Node();
        current.children[letter] = newNode;
      }
      current = current.children[letter];
    }
    current.wordComplete = true;
    return;
  }

  // returns boolean
  search(word) {
    let current = this.root;
    for (let letter of word) {
      if (!current.children[letter]) return false;
      current = current.children[letter];
    }
    return current.wordComplete;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let letter of prefix) {
      if (!current.children[letter]) return false;
    }
    return current.children ? true : false;
  }
}