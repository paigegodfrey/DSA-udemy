// helper
function getDigit(num, i) {
  let numString = Math.abs(num).toString();
  if (numString[numString.length - 1 - i]) {
    return Number(numString[numString.length - 1 - i]);
  }
  return 0;
}

// O(nk) time => debatable based on how distinct numbers (k) are stored in memory
// O(n + k) space
function radixSort(nums) {
  let maxDigitCount = Math.max([...arr]).toString().length;
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}


