'use strict'
const arrayShift=require('../arrayShift.js')

const cb=arrayShift.method;
const insertArr=arrayShift.otherMethod;



describe('ArrayShift()', () => {

    it('Can successfully search ', () => {
        let arr1 = [2, 4, 6, 8];
        let arr2 = [4, 8, 15, 23, 42];
        expect(insertArr(arr1, 5, cb)).toEqual([2,4,5,6,8,]);
        expect(insertArr(arr2, 16, cb)).toEqual([4,8,15,16,23,42]);
        // expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 11)).toEqual(0);
        // expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 77)).toEqual(6);
    });
});