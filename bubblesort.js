function bubbleSort(arr) {
  let isSorted = false;
  let lastUnsorted = arr.length - 1;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastUnsorted; i++) {
      if (arr[i] > arr[i + 1]) {
        arr = swap(arr, i, i + 1);
        isSorted = false;
      }
    }
    lastUnsorted--;
  }
  return arr;
}

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
  return arr;
}
