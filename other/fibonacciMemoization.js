// fibonacci numbers => 1, 1, 2, 3, 5, 8, 13, ...
// store fib(n) in Array memo at index n
// use Array(n + 1) since arrays are zero-based

function fib(n, memo=Array(n + 1).fill(null)) {
  if (memo[n] !== null) return memo[n];
  let result = n <= 2 ? 1 : fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = result;
  return result;
}

// fib(5);
// fib(4, [x,x,x,x,x,x])                                                             + fib(3, [x,x,x,x,x,x])
// fib(3, [x,x,x,x,x,x])                              + fib(2, [x,x,x,x,x,x])        + fib(2, [x,x,x,x,x,x]) + fib(1, [x,x,x,x,x,x])
// fib(2, [x,x,x,x,x,x]) + fib(1, [x,x,x,x,x,x])      + 1 => memo[2] = 1;            + memo[2]               + 1 => memo[1] = 1
//
// memo
// [x,x,1,x,x,x]
// [x,1,1,x,x,x]
// 
// from line 15:
// memo[2] = 1           + memo[1] = 1                + memo[2] = 1                  + memo[2] = 1           + memo[1] = 1
// memo[3] = 2                                        + memo[2] = 1                  + memo[2] = 1           + memo[1] = 1
// [x,1,1,2,x,x]
// 
// memo[4] = 3                                                                       + memo[3] = 2
// [x,1,1,2,3,x]
// 
// memo[5] = 5
// [x,1,1,2,3,5]
//
// return 5;

// BOTTOM UP APPROACH
function fib(n) {
  if(n <= 2) return 1;
  let arr = [null, 1, 1];

  for(let i = 3; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  
  return arr[n];
}