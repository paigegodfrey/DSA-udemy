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

  enqueue(val, priority) {
    let newNode = new Node(val, priority); 
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    while (idx > 0) {
      let element = this.values[idx];
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break;

      // else if parent.priority < element.priority
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  // remove highest priority
  dequeue() {
    if (!this.values.length) return;
    if (this.values.length === 1) return this.values.pop();

    let highestPriority = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return highestPriority;
  }

  sinkDown(idx) {
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let parentIdx = idx;
    let length = this.values.length;

    // if left child priority is higher (lower number) than parent priority
    if (leftIdx < length && this.heap[leftIdx].priority < this.heap[parentIdx].priority) {
      parentIdx = leftIdx
    }
    // if right child priority is higher(lower number) than parent priority
    // parent is now updated to reflect highest priority of left and original parent
    if (rightIdx < length && this.heap[rightIdx].priority < this.heap[parentIdx].priority) {
      parentIdx = rightIdx
    }

    // swap values if necessary
    if (parentIdx !== idx) {
      [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]]
      this.sinkDown(parentIdx);
    }
  }
}