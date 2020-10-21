class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // O(log n) time
  // O(1) space
  insert(val) {
    this.values.push(val);

    let currentIdx = this.values.length - 1;
    let parentIdx;
    let parent;

    while (currentIdx > 0) {
      parentIdx = Math.floor((currentIdx - 1) / 2);
      parent = this.values[parentIdx];

      if (val <= parent) return;

      // else if (val > parent)
      [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
      currentIdx = parentIdx;
    }
  }

  sinkDown(parentIdx) {
    let leftIdx = 2 * parentIdx + 1;
    let rightIdx = 2 * parentIdx + 2;
    let maxIdx = parentIdx;

    // if left child is greater than parent
    if (this.values[leftIdx] > this.values[maxIdx]) maxIdx = leftIdx;

    // if right child is greater than "parent" (parent is now updated to reflect max of left and original parent)
    if (this.values[rightIdx] > this.values[maxIdx]) maxIdx = rightIdx;

    // swap values if necessary
    if (maxIdx !== parentIdx) {
      [this.values[maxIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[maxIdx]];
      this.sinkDown(maxIdx);
    }
  }

  // O(log n) time
  // O(h) space where h is the height of the BinaryHeap
  extractMax() {
    if (!this.values.length) return;
    if (this.values.length === 1) return this.values.pop();

    let max = this.values[0];
    // reassign most recently added value as root
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return max;
  }
}