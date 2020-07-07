class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null
  }

  breadthFirstSearch(root) {
    if (root === null) return [];

    let curr = root;
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

  inOrderTraversal() {

  }

  preOrderTraversal() {
    
  }

  postOrderTraversal() {

  }

}