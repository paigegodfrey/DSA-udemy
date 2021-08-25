// Write a function which accepts a string and returns the length 
// of the longest substring without consecutive repeating characters.
const longestSubstringNonConsecutive = str => {
  if (!str || !str.length) return null;

  let count = 1;
  let maxCount = count;

  let left = 0;
  let right = 1;

  while (right < str.length) {
    if (str[right] === str[right - 1]) {
      if (count > maxCount) maxCount = count;
      left = right;
      count = 1;
    } else {
      count += 1;
    }
    right++;
  }
  return Math.max(maxCount, count);
}

// Write a function which accepts a string and returns the length 
// of the longest substring with all distinct characters
const longestSubstring = str => {
  if (str.length < 2) return str.length;

  let maxCount = 0;
  let left = 0;
  let right = 0;
  let set = new Set();

  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      maxCount = Math.max(maxCount, right - left + 1);
      right++;
    } else {
      set.delete(str[left]);
      left++;
    }
  }
  return maxCount
}

console.log(longestSubstring('')) // 0
console.log(longestSubstring('rithmschool')) // 7
console.log(longestSubstring('thisisawesome')) // 6
console.log(longestSubstring('thecatinthehat')) // 7
console.log(longestSubstring('bbbbbb')) // 1
console.log(longestSubstring('longestsubstring')) // 8
console.log(longestSubstring('thisishowwedoit')) // 6