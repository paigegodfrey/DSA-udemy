class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  BFS() {
    if (!this.root) return [];

    let queue = [];
    let output = [];
    let current = this.root;
    queue.push(current);

    while (queue.length) {
      output.push(queue.shift());
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return output;
  }

  // DFS
  preOrder() {

  }

  inOrder() {

  }

  postOrder() {

  }
}