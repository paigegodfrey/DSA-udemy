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
  preOrder(current = this.root, nodes = []) {
    nodes.push(current);
    if (current.left) this.preOrder(current.left, nodes);
    if (current.right) this.preOrder(current.right, nodes);
    return nodes;
  }

  inOrder(current = this.root, nodes = []) {
    if (current.left) this.preOrder(current.left, nodes);
    nodes.push(current);
    if (current.right) this.preOrder(current.right, nodes);
    return nodes;
  }

  postOrder(current = this.root, nodes = []) {
    if (current.left) this.preOrder(current.left, nodes);
    if (current.right) this.preOrder(current.right, nodes);
    nodes.push(current);
    return nodes;
  }
}