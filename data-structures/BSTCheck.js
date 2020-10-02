class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // assume no duplicate values
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.right = newNode;
          return;
        }
        current = current.left;
      }
      else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // returns boolean
  find(val) {
    if (!this.root) return false;

    let current = this.root;
    while (true) {
      if (current.val === val) return true;
      if (val < current.val) {
        if (!current.left) return false;
        current = current.left;
      }
      else if (val > current.val) {
        if (!current.right) return false;
        current = current.right;
      }
    }
  }
}
