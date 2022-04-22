// Write a function that returns the count of unique values in a sorted array

// O(n) time
// O(1) space
const uniqueValues = nums => {
  if (nums.length === 0) return 0;

  let count = 1;
  
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let prior = nums[i - 1];

    if(current !== prior) count++;
  }

  return count;
}
