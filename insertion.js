function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (num < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = num;
      } else if (num >= arr[j]) {
        break;
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
