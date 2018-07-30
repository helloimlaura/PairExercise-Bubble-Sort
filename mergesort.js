function split(wholeArray) {
  let middle = Math.ceil(wholeArray.length / 2);
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

  return sorted.concat(a.slice(aIndex).concat(b.slice(bIndex)));
};

function mergeSort(array) {
  let splitArr = split(array);
  return merge(splitArr[0], splitArr[1]);
}
//
// console.log(mergeSort([1, 3, 5, 2, 10]))
// console.log(mergeSort([1, 3, 5, 2, 10, 11]))
