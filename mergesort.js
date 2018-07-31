'use strict';

function split(wholeArray) {
  let middle = wholeArray.length / 2;
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
}

const merge = (a, b) => {
  let sorted = [];
  let aIndex = 0;
  let bIndex = 0;

  while (aIndex < a.length && bIndex < b.length) {
    if (a[aIndex] > b[bIndex]) {
      sorted.push(b[bIndex]);
      bIndex++;
    } else {
      sorted.push(a[aIndex]);
      aIndex++;
    }
  }
  // for (; aIndex < a.length; aIndex++) sorted.push(a[aIndex]);
  // for (; bIndex < b.length; bIndex++) sorted.push(b[bIndex]);
  // return sorted;
  return sorted.concat(a.slice(aIndex).concat(b.slice(bIndex)));
};

function mergeSort(array) {
  if (array.length < 2) return array;
  let splits = split(array);
  return merge(mergeSort(splits[0]), mergeSort(splits[1]));
}
