// find min value and move to beginning => good when we want to minimize the amount of swaps
// O(n^2) time 
// O(1) space
function selectionSort(arr) {
  let lowest;

  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}