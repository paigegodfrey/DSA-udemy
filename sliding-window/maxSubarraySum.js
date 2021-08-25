function maxSubarraySum(arr, n) {
  if(arr.length < n) return null;

  let maxSum = 0;
  let sum = 0;

  for(let i = 0; i < n; i++) {
    sum += arr[i];
  }

  maxSum = sum;

  for(let i = 0; i < arr.length - n; i++) {
    // sum gets overwritten each time
    // line 12 is necessary to capture original sum value
    sum = sum - arr[i] + arr[i+n];
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5] ,2));
console.log(maxSubarraySum([1,2,5,2,8,1,5] ,4));
console.log(maxSubarraySum([4,2,1,6] ,1));
console.log(maxSubarraySum([4,2,1,6,2] ,4));
console.log(maxSubarraySum([] ,4));
