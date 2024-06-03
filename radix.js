/*
digitCount counts the number of digits of a single number
*/
function digitCount(num) {
  let numStr = num.toString();
  return numStr.length;
}

/*
getDigit gets the number a specified index starting from the right
*/
function getDigit(num, idx) {
  let numStr = num.toString();
  let posFromRight = 0;
  if (numStr[digitCount(num) - idx - 1]) {
    posFromRight = parseFloat(numStr[digitCount(num) - idx - 1]);
  }
  return posFromRight;
}

/*
mostDigits returns the most amount of digits a number has in an array
*/
function mostDigits(arr) {
  let maxDigits = 0;
  for (let num of arr) {
    if (digitCount(num) > maxDigits) {
      maxDigits = digitCount(num);
    }
  }
  return maxDigits;
}

/*
radixSort sorts an array using buckets
*/
function radixSort(arr) {
  let buckets = [[], [], [], [], [], [], [], [], [], []];
  let loopNum = mostDigits(arr);
  for (let i = 0; i < loopNum; i++) {
    while (arr.length) {
      let num = arr[0];
      let digit = getDigit(num, i);
      buckets[digit].push(num);
      arr.shift();
    }
    for (let bucket of buckets) {
      while (bucket.length) {
        let num = bucket.shift();
        arr.push(num);
      }
    }
  }
  return arr;
}

module.exports = { digitCount, getDigit, mostDigits, radixSort };
