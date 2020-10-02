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
    let nodeToInsert = new Node(val);

    if (!this.root) {
      this.root = nodeToInsert;
      return;
    }

    let current = this.root;

    while (current !== null) {
      if (nodeToInsert > current) {
        if (current.right) current = current.right;
        else {
          current.right = nodeToInsert;
          return;
        }
      }
      else if (nodeToInsert < current) {
        if (current.left) current = current.left;
        else {
          current.right = nodeToInsert;
          return;
        }
      }
    }
  }
}
