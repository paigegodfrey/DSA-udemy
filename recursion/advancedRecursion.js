// PART 1

function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// with recursion
function reverse(str, finalStr = '') {
  if (!str.length) return finalStr;
  finalStr += str[str.length - 1];
  return reverse(str.slice(0, -1), finalStr);
}


function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// with recursion
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}


// Write a recursive function called someRecursive which accepts an array and 
// a callback. The function returns true if a single value in the array returns 
// true when passed to the callback. Otherwise it returns false.
function someRecursive(arr, fn) {
  if (!arr.length) return false;
  if (fn(arr[0])) return true;
  return someRecursive(arr.slice(1), fn);
}

// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.
function flatten(arr, finalArr = []) {
  if (!arr.length) return finalArr;

  if (Array.isArray(arr[0])) {
    flatten(arr[0], finalArr);
  } else {
    finalArr.push(arr[0]);
  }
  return flatten(arr.slice(1), finalArr);
}

function flatten(arr, finalArr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], finalArr);
    } else {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

// PART 2

function capitalizeFirst(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr;
}

// with recursion
function capitalizeFirst(arr, finalArr = []) {
  if (!arr.length) return finalArr;
  finalArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return capitalizeFirst(arr.slice(1), finalArr);
}

// Return the sum of all even numbers in an object which may
// contain nested objects.
function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') sum += nestedEvenSum(obj[key]);
    else if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
  }
  return sum;
}

function capitalizeWords(arr, finalArr = []) {
  if (!arr.length) return finalArr;
  finalArr.push(arr[0].toUpperCase());
  return capitalizeWords(arr.slice(1), finalArr);
}

// Convert all the numbers in an object into strings.
// The object may contain nested objects.
function stringifyNumbers(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      obj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    } else {
      obj[key] = obj[key];
    }
  }
  return obj;
}

function stringifyNumbers(obj, newObj = {}) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// Given a nested object, return an array of all the object values
// that are strings.
function collectStrings(obj, arr = []) {
  for (key in obj) {
    if (typeof obj[key] === 'object') collectStrings(obj[key], arr);
    else if (typeof obj[key] === 'string') arr.push(obj[key]);
  }
  return arr;
}