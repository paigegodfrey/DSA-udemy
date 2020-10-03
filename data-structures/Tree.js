class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

class BinaryTree {
  constructor() {
    this.root = root;
  }

  breadthFirstSearch() {
    if (!this.root) return [];

    let nodes = [];
    let queue = [];
    let current = this.root;
    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      nodes.push(current);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return nodes;
  }

}