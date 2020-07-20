// gradually creates a larger left side which is always sorted
// good if we're continually adding data
// O(n^2) time || O(n) best
// O(1) space
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    // while j is a valid index and the left part of the array is out of order
    while (j >= 0 && arr[j] > currentVal) {

      // set the smaller value on the right with the larger value on the left
      arr[j + 1] = arr[j];
      j--;
    }
    if (i !== j + 1) arr[j + 1] = currentVal;
  }
  return arr;
}
