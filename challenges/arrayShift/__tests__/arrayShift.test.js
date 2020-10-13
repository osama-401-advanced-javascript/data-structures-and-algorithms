
'use strict';
const ShiftArray = require('../arrayShift.js');
const method = ShiftArray.method;
const otherMethod = ShiftArray.otherMethod;
describe('array shift challenge ', () => {
    it('It should return a sorted array with the new value', () => {
        let array = [2, 4, 6, 8]
        expect(method(array, 5, otherMethod)).toEqual([2, 4, 5, 6, 8]);
    });
});

describe('array shift challenge ', () => {
    it('It should return a sorted array with the new value', () => {
        let array2 = [4, 8, 15, 23, 42]
        expect(method(array2, 16, otherMethod)).toEqual([4, 8, 15, 16, 23, 42]);
    });
});
