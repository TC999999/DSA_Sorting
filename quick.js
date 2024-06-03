/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr) {
  let pivotVal = arr[0];
  let pivotCount = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivotVal) {
      let lessThan = arr.splice(i, 1)[0];
      arr.unshift(lessThan);
      pivotCount++;
    }
  }
  return pivotCount;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
  if (arr.length > 1) {
    let arrSplit = pivot(arr);
    let left = arr.slice(0, arrSplit + 1);
    let QSLeft = quickSort(left);
    let right = arr.slice(arrSplit + 1);
    let QSRight = quickSort(right);
    return [...QSLeft, ...QSRight];
  } else {
    return arr;
  }
}

module.exports = { quickSort, pivot };
