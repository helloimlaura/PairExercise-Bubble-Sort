describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe('Bubble Sort', function () {
  it('handles an array with one object', function () {
    expect(bubbleSort([1])).toEqual([1]);
  });
});

describe('Bubble Sort', function () {
  it('handles an array with multiple objects', function () {
    expect(bubbleSort([3, 1, 2])).toEqual([1, 2, 3]);
  });
});

beforeAll(function () {
  spyOn(swap).and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('swapping our function takes 2 swaps', function () {
  bubbleSort([3,1,2]);
  expect(swap.calls.count()).toEqual(2);
});
