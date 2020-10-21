class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

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

  sinkDown(idx) {
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let parentIdx = idx;
    let length = this.values.length;

    // if left child is greater than parent
    if (leftIdx < length && this.heap[leftIdx] > this.heap[parentIdx]) {
      parentIdx = leftIdx
    }
    // if right child is greater than parent (parent is now updated to reflect max of left and original parent)
    if (rightIdx < length && this.heap[rightIdx] > this.heap[parentIdx]) {
      parentIdx = rightIdx
    }

    // swap values if necessary
    if (parentIdx !== idx) {
      [this.values[parentIdx], this.values[idx]] = [this.values[idx], this.values[parentIdx]]
      this.sinkDown(parentIdx);
    }
  }

  extractMax() {
    if (!this.values.length) return;
    if (this.values.length === 1) return this.values.pop();

    let max = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return max;
  }
}