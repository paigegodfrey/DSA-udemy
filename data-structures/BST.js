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

  breadthFirstSearch() {
    if (this.root === null) return [];

    let curr = this.root;
    let data = [];

    // use an array to represent the queue for simplicity
    // time complexity for actual queue is constant => insertion & removal
    let queue = [];
    queue.push(curr);

    while (queue.length) {
      curr = queue.shift();
      data.push(curr);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return data;
  }

  // left, node, right
  inOrderTraversal(node = this.root, data = []) {
    if (node.left) this.inOrderTraversal(node.left, data);
    data.push(node);
    if (node.right) this.inOrderTraversal(node.right, data);
    return data;
  }

  // node, left, right
  preOrderTraversal(node = this.root, data = []) {
    data.push(node);
    if (node.left) this.preOrderTraversal(node.left, data);
    if (node.right) this.preOrderTraversal(node.right, data);
    return data;
  }

  // left, right, node
  postOrderTraversal(node = this.root, data = []) {
    if (node.left) this.postOrderTraversal(node.left, data);
    if (node.right) this.preOrderTraversal(node.right, data);
    data.push(node);
    return data;
  }

}
