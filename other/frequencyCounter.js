// Given two positive integers, find out if the two numbers have the same
// frequency of digits.

function sameFrequency(num1, num2){

  let num1String = num1.toString();
  let num2String = num2.toString();

  if(num1String.length !== num2String.length) return false;

  let num1FrequencyObj = {};
  for(let num of num1String) {
    num1FrequencyObj[num] = num1FrequencyObj[num] ? num1FrequencyObj[num]++ : 1;
  }

  let num2FrequencyObj = {};
  for(let num of num2String) {
    num2FrequencyObj[num] = num2FrequencyObj[num] ? num2FrequencyObj[num]++ : 1;
  }

  for(let num in num1FrequencyObj) {
    if(num1FrequencyObj[num] !== num2FrequencyObj[num]) return false;
  }

  return true;
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false


// Implement a function which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in.

function areThereDuplicates() {
  let frequencyObj = {};
  for(let arg of arguments) {
    frequencyObj[arg] = frequencyObj[arg] ? frequencyObj[arg] + 1 : 1;
  }

  for(let key in frequencyObj) {
    if(frequencyObj[key] > 1) return true;
  }

  return false;
} 

function areThereDuplicates() {
  let setArgs = new Set(arguments);
  return setArgs.size !== arguments.length;
}

areThereDuplicates(1, 2, 2) // true 
areThereDuplicates(1, 2, 3) // false
areThereDuplicates('a', 'b', 'c', 'a') // true 


