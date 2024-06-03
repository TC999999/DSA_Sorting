function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let initialMin = arr[i];
    let finalMin = initialMin;
    let finalMinIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (finalMin > arr[j]) {
        finalMin = arr[j];
        finalMinIdx = j;
      }
    }
    if (finalMin !== initialMin) {
      arr[i] = finalMin;
      arr[finalMinIdx] = initialMin;
    }
  }
  return arr;
}

module.exports = selectionSort;
