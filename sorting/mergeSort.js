// helper function
// O(n + m) time
// O(n + m) space
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return result;
}

// O() time
// O() space
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// EXAMPLE
// mergeSort([10, 24, 76, 73])
// left => mergeSort([10, 24]) => mergeSort([10]) => [10]
// right => mergeSort([24]) => [24]
// merge([10], [24]) => [10, 24]
// => left resolves to [10, 24]
// right => mergeSort([76, 73])
// left => mergeSort([76]) => [76]
// right => mergeSort([73]) => [73]
// merge([76], [73]) => [73, 76]
// => right resolves to [73, 76]
// merge([10, 24], [73, 76])
// => final answer [10, 24, 73, 76]