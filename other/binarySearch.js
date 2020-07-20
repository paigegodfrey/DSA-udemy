function binarySearch(arr, val) {
  if(!arr.length) return -1;

  let min = 0;
  let max = arr.length - 1;

  while(min <= max) {
    let mid = Math.floor((min + max) / 2);
    if(arr[mid] === val) return mid;
    if(arr[mid] < val) min = mid + 1;
    if(arr[mid] > val) max = mid - 1;
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6], 4)); // 3
console.log(binarySearch([6,7,8,9,10,11,12], 8)); // 2
console.log(binarySearch([1,2,3,4,5,6], 11)); // -1
