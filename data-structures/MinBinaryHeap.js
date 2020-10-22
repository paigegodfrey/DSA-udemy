class MinBinaryHeap {
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

      if (val >= parent) return;
      [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
      currentIdx = parentIdx;
    }
  }

  // O(log n) time
  // O(h) space where h is the height of the BinaryHeap
  extractMin() {
    if (!this.values.length) return;
    if (this.values.length === 1) return this.values.pop();

    let min = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(parentIdx) {
    let leftIdx = 2 * parentIdx + 1;
    let rightIdx = 2 * parentIdx + 2;
    let minIdx = parentIdx;

    if (this.values[leftIdx] < this.values[minIdx]) minIdx = leftIdx;
    if (this.values[rightIdx] < this.values[minIdx]) minIdx = rightIdx;
    if (minIdx !== parentIdx) {
      [this.values[minIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[minIdx]];
      this.sinkDown(minIdx);
    }
  }
}