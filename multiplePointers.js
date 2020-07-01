
// Given a sorted array of integers and a target average, determine if there 
// is a pair of values in the array where the average of the pair equals the 
// target average. There may be more than one pair that matches the target.

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) return true;
    if (avg > target) right--;
    else if (avg < target) left++;
  }
  return false;
}

averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false


// Write a function which takes in two strings and checks whether the
// characters in the first string form a subsequence of the characters
// in the second string.

function isSubsequence(str1, str2) {
  let str1Idx = 0;

  for(let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[str1Idx]) str1Idx++;
    if (str1Idx === str1.length - 1) return true;
  }
  return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
