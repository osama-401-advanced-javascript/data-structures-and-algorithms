'use strict';
const insertionSort = require('../InsertionSort.js');

describe('Insertion Sort Tests', () => {
  it('should return a sorted array', () => {
    let array = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('should return an array originally sorted in descending order to ascending order', () => {
    let reverseArray = [20, 18, 12, 8, 5, -2];
    expect(insertionSort(reverseArray)).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('should sort an array with multiples of same number correctly', () => {
    let fewUniques = [5, 12, 7, 5, 5, 7];
    expect(insertionSort(fewUniques)).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('should correctly sort a NEARLY sorted array', () => {
    let nearlySorted = [2, 3, 5, 7, 13, 11];
    expect(insertionSort(nearlySorted)).toEqual([2, 3, 5, 7, 11, 13]);
  });
  it('should return empty on an empty array', () => {
    let empty = [];
    expect(insertionSort(empty)).toEqual([]);
  });
});
