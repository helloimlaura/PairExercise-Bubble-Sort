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
});
