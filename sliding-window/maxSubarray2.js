const maxSubarray2 = (nums, n) => {
  if (nums.length <= n) return null;

  let sum = 0;
  let maxSum;

  for (let i = 0; i < nums.length; i++) {
    if (i < n) {
      sum += nums[i];
      maxSum = sum;
    } else {
      sum = sum - nums[i - n] + nums[i]
      if (sum > maxSum) maxSum = sum;
    }
  }
  return maxSum;
}