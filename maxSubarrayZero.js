function maxSubarrayZero(arr) {
  if(!arr.length) return null;

  let maxZero = 0;
  let temp = 0;

  for(let num of arr) {
    if (num === 0) {
      temp++;
      continue;
    }
    maxZero = Math.max(temp, maxZero);
    temp = 0;
  }
  return Math.max(temp, maxZero);
}

console.log(maxSubarrayZero([1,0,0,1,0,1,0,0,0,0])); //4