class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = root;
  }

  // O(n) time 
  // O(n) space => OR O(w) space where w is max-width, if not returning nodes
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

  // DEPTH FIRST SEARCH TYPES
  //              10
  //          6       15
  //        3   8        20


  // O(n) time
  // O(n) space => OR O(h) space where h is tree height, if not returning nodes
  // left, node, right => [3, 6, 8, 10, 15, 20]
  inOrderTraversal(node = this.root, data = []) {
    if (node.left) this.inOrderTraversal(node.left, data);
    data.push(node);
    if (node.right) this.inOrderTraversal(node.right, data);
    return data;
  }

  // O(n) time
  // O(n) space => OR O(h) space where h is tree height, if not returning nodes
  // node, left, right => [10, 6, 3, 8, 15, 20]
  preOrderTraversal(node = this.root, data = []) {
    data.push(node);
    if (node.left) this.inOrderTraversal(node.left, data);
    if (node.right) this.inOrderTraversal(node.right, data);
    return data;
  }

  // O(n) time
  // O(n) space => OR O(h) space where h is tree height, if not returning nodes
  // left, right, node => [3, 8, 6, 20, 15, 10]
  postOrderTraversal(node = this.root, data = []) {
    if (node.left) this.inOrderTraversal(node.left, data);
    if (node.right) this.inOrderTraversal(node.right, data);
    data.push(node);
    return data;
  }
}