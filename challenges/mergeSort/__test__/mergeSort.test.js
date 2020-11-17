const mergeSort = require('../mergeSort.js');
describe('mergeSort()', () => {
  it('should merge the passed arr', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let results = mergeSort(array);
    expect(results).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('should Reverse-sorted the passed arr', () => {
    let array = [20, 18, 12, 8, 5, -2];
    let results = mergeSort(array);
    expect(results).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('should Few uniques the passed arr', () => {
    let array = [5, 12, 7, 5, 5, 7];
    let results = mergeSort(array);
    expect(results).toEqual([5, 5, 5, 7, 7, 12]);
  });
});
