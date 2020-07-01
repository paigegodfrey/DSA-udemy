// function countUniqueValues(arr) {
//   if (!arr.length) return 0;

//   let total = 1;
//   let pointer1 = 0;
//   let pointer2 = 1;

//   while(pointer2 < arr.length) {
//     if(arr[pointer1] !== arr[pointer2]) {
//       total++;
//       pointer1 = pointer2;
//     }
//     pointer2++;
//   }
//   return total;
// }

function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let pointer1 = 0;
  let pointer2 = 1;

  while(pointer2 < arr.length) {
    if (arr[pointer1] !== arr[pointer2]) {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
    pointer2++;
  }
  arr.length = pointer1 + 1;
  return arr.length;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,-0,1]));