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
      parentIdx = Math.floor(currentIdx - 1) / 2;
      parent = this.values[parentIdx];

      if (val <= parent) return;
      
      // else if (val > parent)
      [this.values[currentIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[currentIdx]];
      currentIdx = parentIdx;
    }
  }


  extractMax() {

  }

}