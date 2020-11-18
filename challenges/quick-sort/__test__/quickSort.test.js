const { quickSort } = require('../quickSort.js');
describe('quickSort()', () => {
  it('should merge the passed arr', () => {
    let array = [8, 4, 23, 42, 16, 15];
    let results = quickSort(array, 0, array.length - 1);
    expect(results).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('should Reverse-sorted the passed arr', () => {
    let array = [20, 18, 12, 8, 5, -2];
    let results = quickSort(array, 0, array.length - 1);
    expect(results).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('should Few uniques the passed arr', () => {
    let array = [5, 12, 7, 5, 5, 7];
    let results = quickSort(array, 0, array.length - 1);
    expect(results).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('should Nearly-sorted the passed arr', () => {
    let array = [2, 3, 5, 7, 13, 11];
    let results = quickSort(array, 0, array.length - 1);
    expect(results).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
