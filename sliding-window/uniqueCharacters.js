// Write a function that returns the count of the longest sequence of unique characters

// O(n) time
// O(n) space
const longestSubString = str => {
  if (str.length < 2) return str.length;

  let maxCount = 0;
  let frequency = {};

  let left = 0;
  let right = 0;

  while (right < str.length) {
    let leftChar = str[left];
    let rightChar = str[right];

    while (str[right] in frequency) {
      delete frequency[leftChar];
      left++;
    }
    frequency[rightChar] = 1;
    let count = right - left + 1;
    maxCount = Math.max(maxCount, count);
    right++;
  }
  
  return maxCount;
}
