class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// where priority 1 is the highest
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // O(log n) time
  // O(1) space
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    let currentIdx = this.values.length - 1;
    let current;
    let parentIdx;
    let parent;

    while (currentIdx > 0) {
      current = this.values[currentIdx];
      parentIdx = Math.floor((currentIdx - 1) / 2);
      parent = this.values[parentIdx];

      if (current.priority >= parent.priority) return;

      // else if parent.priority < element.priority
      [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
      currentIdx = parentIdx;
    }
  }

  // O(log n) time
  // O(h) space where h is the height of the BinaryHeap
  // remove "highest" priority => lowest priority number (e.g. 1)
  dequeue() {
    if (!this.values.length) return;
    if (this.values.length === 1) return this.values.pop();

    let highestPriority = this.values[0];
    // reassign most recently added value as root
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return highestPriority;
  }

  sinkDown(parentIdx) {
    let leftIdx = 2 * parentIdx + 1;
    let rightIdx = 2 * parentIdx + 2;
    let topPriorityIdx = parentIdx;

    // if left child priority is higher (lower number) than parent priority
    if (this.values[leftIdx].priority < this.values[topPriorityIdx].priority) topPriorityIdx = leftIdx;

    // if right child priority is higher (lower number) than "parent" priority
    // topPriorityIdx now reflects highest priority of left and original parent
    if (this.values[rightIdx].priority < this.values[topPriorityIdx].priority) topPriorityIdx = rightIdx;

    // swap values if necessary
    if (topPriorityIdx !== parentIdx) {
      [this.values[topPriorityIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[topPriorityIdx]];
      this.sinkDown(topPriorityIdx);
    }
  }
}