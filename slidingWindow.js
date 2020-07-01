
// Given an array of integers and a number, write a function which 
// finds the maximum sum of a subarray with the length of the number 
// passed to the function. Note that a subarray must consist of 
// consecutive elements from the original array. 

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let currentSum = 0;
  for (let i = 0; i < num; i++) {
    currentSum += arr[i];
  }
  let maxSum = currentSum;

  for (let i = 0; i < arr.length - num; i++) {
    currentSum = currentSum - arr[i] + arr[i + num];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39 
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
maxSubarraySum([2, 3], 3) // null


// Write a function which accepts two parameters - an array of 
// positive integers and a positive integer. This function should 
// return the minimal length of a contiguous subarray of which the 
// sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead.

function minSubArrayLen(arr, num) {
  let currentSum = 0;
  let start = 0;
  let next = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (currentSum < num) {
      if (next >= arr.length) break;
      currentSum += arr[next];
      next++;
    }
    if (currentSum >= num) {
      // next is already incremented so next - start + 1 overstates the current length
      minLen = Math.min(next - start, minLen);
      currentSum = currentSum - arr[start];
      start++;
    }
  }
  return minLen < Infinity ? minLen : 0;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0


// Write a function which accepts a string and returns the length of the longest substring
// with all distinct characters.

function findLongestSubstring() {
  

}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
