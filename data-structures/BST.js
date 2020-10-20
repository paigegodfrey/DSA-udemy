class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // O(log n) time
  // O(1) space
  // always attach to the END of the tree
  // traverse through nodes by comparing val to curr.val
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let curr = this.root;
    while (true) {
      if (val === curr.val) throw new Error('duplicate value');

      if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          return;
        }
        curr = curr.left;
      }

      else if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          return;
        }
        curr = curr.right;
      }
    }
  }

  // O(log n) time
  // O(1) space
  // returns boolean
  find(val) {
    if (!this.root) return false;

    let curr = this.root;
    while (curr) {
      if (val === curr.val) return true;
      if (val < curr.val) curr = curr.left;
      else if (val > curr.val) curr = curr.right;
    }
    return false;
  }
}
