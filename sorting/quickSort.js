// helper function
// rearranges elements in the array
// smaller than pivot to the left (unsorted)
// larger than pivot to the right (unsorted)
function partition(arr, left = 0, right = arr.length - 1) {
  let pivot = Math.floor((left + right) / 2);
  while (left <= right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }
    while (arr[right] > arr[pivot]) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

// good for large data sets
// O(n log n) time
// O(log n) space
function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivot = partition(arr, left, right);
  if (left < pivot - 1) quickSort(arr, left, pivot - 1);
  if (right > pivot) quickSort(arr, pivot, right);
  return arr;
}





