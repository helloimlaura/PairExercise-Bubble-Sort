describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2, 2, 2, 3, 3, 3])).toBe([[2, 2, 2], [3, 3, 3]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    const result = [1, 2, 3, 4, 5, 6];
    expect(merge([1, 3, 4], [2, 5, 6])).toBe(result);
  });
});

describe('mergeSort function', function() {
  it('is able to sort an array with an even number of values', function() {
    const result = [1, 2, 3, 5, 10, 11];
    expect(mergeSort([1, 3, 5, 2, 10, 11])).toBe(result);
  });
});

describe('mergeSort function', function() {
  it('is able to sort an array with an odd number of values', function() {
    const result = [1, 2, 3, 5, 11];
    expect(mergeSort([11, 3, 5, 2, 1])).toBe(result);
  });
});
