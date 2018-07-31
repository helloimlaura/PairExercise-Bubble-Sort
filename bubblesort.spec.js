function numerically(a, b) {
  return a - b;
}

function generateArray(size, lower, upper) {
  let randomArray = [];
  while (size--) {
    let randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

describe('Bubble Sort', function() {
  it('sorts an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array with one object', function() {
    expect(bubbleSort([7])).toEqual([7]);
  });

  it('handles an array with multiple objects', function() {
    expect(bubbleSort([5, 2, 7, 9, 3, 5, 4, 1, 0])).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      5,
      7,
      9,
    ]);
  });

  for (var i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function() {
      var arr = generateArray(i, 0, 100);
      var sorted = arr.slice(0).sort(numerically);
      expect(bubbleSort(arr)).toEqual(sorted);
    });
  }
  // end of describe
});
