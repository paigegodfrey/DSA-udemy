// helper function => build table with length of suffix that is a prefix
// O(n) time
// O(n) space
function computeTemporaryArray(substring) {
  let table = new Array(substring.length);

  // initialize pointers
  let p1 = 0;
  let p2 = 1;

  table[0] = 0;

  while (p2 < substring.length) {
    if (substring[p1] === substring[p2]) {
      table[p2] = p1 + 1; // to adjust for zero-based array indexing
      p1++;
      p2++;
    } else {
      if (p1 !== 0) p1 = table[p1 - 1];
      else {
        table[p2] = 0;
        p2++;
      }
    }
  }
  return table;
}

// main function
// O(n + m) time
// O(n) space
function stringSearch(str, substring) {
  let table = computeTemporaryArray(substring);
  let i = 0;
  let j = 0;

  while (i < str.length && j < substring.length) {
    if (str[i] === substring[j]) {
      i++;
      j++;
    } else {
      if (j !== 0) j = table[j - 1];
      else i++;
    }
  }

  return j === substring.length;
}